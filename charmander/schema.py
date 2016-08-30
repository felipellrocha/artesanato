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

from models import (
  Comment as CommentModel,
  Product as ProductModel,
  Profile as ProfileModel,
)

import jwt
import logging

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
  class Meta:
    model = ProfileModel

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
  class Meta:
    model = CommentModel

@schema.register
class Product(SQLAlchemyNode):
  class Meta:
    model = ProductModel

class Query(graphene.ObjectType):
  product = relay.NodeField(Product)
  products = SQLAlchemyConnectionField(Product)

schema.query = Query
