import graphene
from graphene import relay, resolve_only_args

schema = graphene.Schema()

comments = {
  '9d587390': {
    'id': '9d587390',
    'user': '51f7709a',
    'text': "Bloodraven dorne god's eye, lyanna crownlands starfall old nan godsgrace king's landing the things I do for love podrick bran. Night's king ramsay essos vale of arryn brave companions meereen, valar morghulis balon dragonstone.",
    'datetime': '2016-08-21T15:02:06.022893'
  }
}

users = {
  '1ec38fd5': {
    'id': '1ec38fd5',
    'first_name': 'Stannis',
    'last_name': 'of House Baratheon',
    'image': 'images/profiles/stannis.png',
    'description': "Darkstar winterfell casterly rock jaqen. Bronn rhaegal robb I'm no one. Tysha vaes dothrak the twins bael the bard greatjon viserion kill the boy sansa jon connington harrenhal olenna dragonstone alliser thorne. Victarion iron islands gift, howland reed what is dead may never die elia horn hill strong belwas red keep quentyn. Arya samwell i dreamed that I was old reach, doran aeron dagmer cleftjaw gilly.",
  },
  '51f7709a': {
    'id': '51f7709a',
    'first_name': 'Jon',
    'last_name': 'Snow',
    'image': 'images/profiles/jon-snow.jpg',
    'description': "Maidenpool Wun Weg Wun Dar Wun skirling pass lemonwood loras tower of joy ashara. Night's king sunspear maidenpool areo. bran fingers alliser thorne castle black eyrie oh my sweet summer child lemonwood jaehaerys ashara tormund. Storm's end maegor red keep, wyman manderly aemon areo hotah coldhands rickon summerhall frostfangs brandon stark.",
  },
}

products = {
  'entities': {
    '82598577': {
      'id': '82598577',
      'title': 'Vasos simples',
      'screenshot': 'images/products/vases.jpg',
      'description': "the wall fire and blood joffrey howland reed dontos hollard euron rhaenyra varys. Bael the bard king's landing the knights of summer fear cuts deeper than swords osha elia egg pyke. Catelyn the pointy end shireen greatjon the lone wolf dies but the pack survives lady. Greywind ruby ford areo hotah, jaime jory great wyk promise me ned oh my sweet summer child.",
      'comments': [
        '9d587390',
      ],
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
      'description': " Varys brandon stark and now it begins lysa lannisport wyman manderly sansa benjen bran watcher on the walls. Lemonwood aenys sandor, the north remembers gregor rhaenyra only Cat crownlands elia aemon nymeria. Margaery stormlands euron sandor ashara.\n\nStarfall astapor neck riverlands, what is dead may never die howland reed khal drogo fuck your water bring me wine jon snow bloodraven you know nothing viserys baelor vaes dothrak.",
      'comments': [],
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

  def resolve_products(self, args, *_):
    return [Product(**products['entities'].get(id)) for id in products['order']]

schema.query = Query
