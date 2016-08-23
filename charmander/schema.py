import graphene
from graphene import relay, resolve_only_args, with_context

from data import *

schema = graphene.Schema()

class Price(graphene.ObjectType):
  value = graphene.Float()
  currency = graphene.String()

class Profile(graphene.ObjectType):
  id = graphene.ID()
  first_name = graphene.String()
  last_name = graphene.String()
  image = graphene.String()
  description = graphene.String()
  username = graphene.String()
  password = graphene.String()

  @resolve_only_args
  def resolve_username(self):
    return None

  @resolve_only_args
  def resolve_password(self):
    return None

class Comment(graphene.ObjectType):
  id = graphene.ID()
  user = graphene.Field(Profile)
  text = graphene.String()
  datetime = graphene.String()

  def resolve_user(self, args, _):
    user = users[self.user]
    return Profile(**user)

class Product(graphene.ObjectType):
  id = graphene.ID()
  title = graphene.String()
  screenshot = graphene.String()
  description = graphene.String()
  price = graphene.Field(Price)
  seller = graphene.Field(Profile)
  comments = graphene.List(Comment)

  def resolve_seller(self, args, _):
    seller = users[self.seller]
    return Profile(**seller)

  def resolve_comments(self, args, *_):
    return [Comment(**comments.get(id)) for id in self.comments]

  def resolve_price(self, args, _):
    return Price(**self.price)

class Query(graphene.ObjectType):
  product = graphene.Field(
    Product,
    id = graphene.String()
  )

  products = graphene.List(Product)

  @resolve_only_args
  def resolve_product(self, id):
    return Product(**products['entities'].get(id))

  @with_context
  def resolve_products(self, args, context, info):
    print args, context.__dict__
    return [Product(**products['entities'].get(id)) for id in products['order']]

schema.query = Query
