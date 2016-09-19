import graphene
from graphene import relay, resolve_only_args, with_context
from graphene.contrib.sqlalchemy import (
  SQLAlchemyNode,
  SQLAlchemyConnectionField,
)

from data import (
  SECRET,
  EXPIRATION,
  ALGORITHM,
)

from database import (
  session,
  es,
)

from models import (
  Comment as CommentModel,
  Profile as ProfileModel,
)

import jwt
import logging

logging.basicConfig()
logger = logging.getLogger(__name__)

schema = graphene.Schema()

def is_authenticated(request):
  token = request.environ.get('HTTP_AUTHENTICATION', None)
  if token:
    try:
      payload = jwt.decode(token, SECRET, ALGORITHM)
    except (jwt.DecodeError, jwt.ExpiredSignatureError):
      return False

    return payload['user_id']
  else:
    return None

@schema.register
class Profile(SQLAlchemyNode):
  pk = graphene.String()

  class Meta:
    model = ProfileModel

  def resolve_pk(self, args, info):
    return self._root.id

  @with_context
  def resolve_username(self, args, context, info):
    if is_authenticated(context):
      return self.username
    return None

  @resolve_only_args
  def resolve_password(self):
    return None

@schema.register
class Comment(SQLAlchemyNode):
  pk = graphene.String()

  def resolve_pk(self, args, info):
    return self._root.id

  class Meta:
    model = CommentModel

@schema.register
class Product(graphene.ObjectType):
  pk = graphene.String()

  id = graphene.ID()
  title = graphene.String()
  screenshot = graphene.String()
  description = graphene.String()
  price_value = graphene.String()
  price_currency = graphene.String()
  seller = graphene.Field(Profile)
  comments = graphene.List(Comment)
  tags = graphene.List(graphene.String())

  def resolve_pk(self, args, info):
    return self.id

  def resolve_comments(self, args, info):
    comments = session.query(CommentModel).filter(CommentModel.id.in_(self.comments))
    return [Comment(comment) for comment in comments]

  def resolve_seller(self, args, _):
    seller = session.query(ProfileModel).filter(ProfileModel.id == self.seller).one()
    return Profile(seller)

@schema.register
class CreateComment(graphene.Mutation):
  class Input:
    text = graphene.String()
    user_id = graphene.String()
    product_id = graphene.String()

  ok = graphene.Boolean()
  comment = graphene.Field(Comment)

  @classmethod
  def mutate(cls, instance, args, info):
    session.begin()

    new_comment = CommentModel(
      text = args.get('text'),
      user_id = args.get('user_id'),
      product_id = args.get('product_id'),
    )

    session.add(new_comment)

    session.commit()

    return CreateComment(
      comment=Comment(new_comment),
      ok=True,
    )

class Query(graphene.ObjectType):
  products = graphene.List(Product)

  product = graphene.Field(
    Product,
    id = graphene.String()
  )


  @resolve_only_args
  def resolve_product(self, id):
    product = es.get(index='artesanato', doc_type='product', id=id)
    source = product['_source']
    source['id'] = product['_id']
    return Product(**source)

  @with_context
  def resolve_products(self, args, context, info):
    products = es.search(index='artesanato', doc_type='product')
    return [
      formatProduct(product)
      for product in products['hits']['hits']
    ]

def formatProduct(product):
  source = product['_source']
  source['id'] = product['_id']
  return Product(**source)

class Mutations(graphene.ObjectType):
  create_comment = graphene.Field(CreateComment)

schema.query = Query
schema.mutation = Mutations
