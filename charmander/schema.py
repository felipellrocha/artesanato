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

from database import db_session

from models import (
  Comment as CommentModel,
  Product as ProductModel,
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
class Product(SQLAlchemyNode):
  pk = graphene.String()

  def resolve_pk(self, args, info):
    return self._root.id

  class Meta:
    model = ProductModel

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
    print args
    db_session.begin()

    new_comment = CommentModel(
      text = args.get('text'),
      user_id = args.get('user_id'),
      product_id = args.get('product_id'),
    )

    db_session.add(new_comment)

    db_session.commit()

    print new_comment.__dict__
    print Comment(new_comment).__dict__

    return CreateComment(
      comment=Comment(new_comment),
      ok=True,
    )

class Query(graphene.ObjectType):
  product = relay.NodeField(Product)
  products = SQLAlchemyConnectionField(Product)

class Mutations(graphene.ObjectType):
  create_comment = graphene.Field(CreateComment)

schema.query = Query
schema.mutation = Mutations
