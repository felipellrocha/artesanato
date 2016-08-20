import graphene
from graphene import relay
from graphene.contrib.sqlalchemy import (
  SQLAlchemyNode,
  SQLAlchemyConnectionField
)
from models.products import (
  db_session,
  Product as ProductModel
)

schema = graphene.Schema()

@schema.register
class Product(SQLAlchemyNode):
  class Meta:
    model = ProductModel

class Query(graphene.ObjectType):
  node = relay.NodeField()
  all_products = SQLAlchemyConnectionField(Product)

schema.query = Query
