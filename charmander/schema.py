import graphene
from graphene import relay, resolve_only_args
from graphene.contrib.sqlalchemy import (
  SQLAlchemyNode,
  SQLAlchemyConnectionField
)
from models.products import (
  db_session,
  Product as ProductModel
)

schema = graphene.Schema()

"""
@schema.register
class Product(SQLAlchemyNode):
  class Meta:
    model = ProductModel

class Query(graphene.ObjectType):
  node = relay.NodeField()
  all_products = SQLAlchemyConnectionField(Product)
"""

users = {
  '1ec38fd5': {
    'id': '1ec38fd5',
    'first_name': 'Stannis',
    'last_name': 'of House Baratheon',
    'image': 'images/profiles/stannis.png',
    'description': 'Raw denim sartorial polaroid forage waistcoat meditation banjo, stumptown flannel quinoa seitan normcore selvage microdosing. Tote bag dreamcatcher master cleanse readymade, green juice yuccie messenger bag post-ironic sriracha fanny pack brunch crucifix seitan roof party.',
  }
}

products = {
  'entities': {
    '82598577': {
      'id': '82598577',
      'title': 'Vasos simples',
      'screenshot': 'images/products/vases.jpg',
      'description': 'Freegan pour-over DIY celiac actually. Thundercats chicharrones mixtape, keffiyeh blue bottle normcore tilde celiac locavore. PBR&B wolf pitchfork hammock polaroid, migas viral gluten-free chia. Pour-over brooklyn before they sold out keytar trust fund. Leggings salvia chicharrones freegan, mumblecore food truck cold-pressed pabst farm-to-table gastropub. Leggings put a bird on it viral, raw denim XOXO pork belly franzen cronut hoodie cardigan +1 single-origin coffee. Cred twee brunch, authentic man braid meditation before they sold out butcher ennui.',
      'price': {
        'value': '2.99',
        'currency': 'USD',
      },
      'seller': '1ec38fd5',
    },
    'bfa60128': {
      'id': 'bfa60128',
      'title': 'Vasos de areia',
      'screenshot': 'images/products/areias.jpg',
      'description': 'Bitters mixtape biodiesel photo booth. Messenger bag kitsch kale chips 3 wolf moon gastropub, blue bottle flexitarian fashion axe tattooed. Readymade yuccie tumblr pug. Seitan 8-bit forage mumblecore butcher art party. Fap gochujang mlkshk, green juice pour-over truffaut letterpress photo booth VHS. Cardigan kombucha deep v, austin ennui shabby chic actually +1 occupy try-hard. Food truck meditation pinterest shabby chic, intelligentsia hashtag etsy ethical.',
      'price': {
        'value': '2.99',
        'currency': 'USD',
      },
      'seller': '1ec38fd5',
    }
  },
  'order': [
    '82598577',
    'bfa60128',
  ]
}

class Price(graphene.ObjectType):
  value = graphene.Float()
  currency = graphene.String()

class Profile(graphene.ObjectType):
  id = graphene.ID()
  first_name = graphene.String()
  last_name = graphene.String()
  image = graphene.String()
  description = graphene.String()

# Test schema
class Product(graphene.ObjectType):
  id = graphene.ID()
  title = graphene.String()
  screenshot = graphene.String()
  description = graphene.String()
  price = graphene.Field(Price)
  seller = graphene.Field(Profile)

  def resolve_seller(self, args, _):
    seller = users[self.seller]
    print seller
    return Profile(**seller)

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

  def resolve_products(self, args, *_):
    return [Product(**products['entities'].get(id)) for id in products['order']]

schema.query = Query
