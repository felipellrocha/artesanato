from datetime import datetime

from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import scoped_session, sessionmaker

from elasticsearch import Elasticsearch

engine = create_engine('sqlite:///artesanato.sqlite3', convert_unicode=True)
session = scoped_session(sessionmaker(
  autocommit=True,
  autoflush=True,
  bind=engine
))
Base = declarative_base()
Base.query = session.query_property()

es = Elasticsearch(['http://localhost:9200'])

def init():
  from models import (
    Profile,
    Product,
    Comment
  )

  Base.metadata.drop_all(bind=engine)
  Base.metadata.create_all(bind=engine)
  es.indices.delete(index='_all')

  session.begin()

  stannis = Profile(**{
    'first_name': 'Stannis',
    'last_name': 'of House Baratheon',
    'image': 'images/profiles/stannis.png',
    'description': "The second born son of Steffon Baratheon and Cassana Baratheon, the younger brother of the late King Robert Baratheon and older brother of Renly Baratheon. Steffon was the head of House Baratheon and Lord Paramount of the Stormlands. The Stormlands are one of the constituent regions of the Seven Kingdoms and House Baratheon is one of the Great Houses of the realm. Steffon died when the boys were young and Robert inherited his titles. Stannis is a serious and severe man.",
    'username': 'stannis',
    'password': 'king',
  })
  jon = Profile(**{
    'first_name': 'Jon',
    'last_name': 'Snow',
    'image': 'images/profiles/jon-snow.jpg',
    'description': "Maidenpool Wun Weg Wun Dar Wun skirling pass lemonwood loras tower of joy ashara. Night's king sunspear maidenpool areo. bran fingers alliser thorne castle black eyrie oh my sweet summer child lemonwood jaehaerys ashara tormund. Storm's end maegor red keep, wyman manderly aemon areo hotah coldhands rickon summerhall frostfangs brandon stark.",
    'username': 'stark',
    'password': 'ygritte4ev3r',
  })

  session.add(stannis)
  session.add(jon)

  comment1 = Comment(**{
    'user': stannis,
    'text': "When Eddard Stark learned the truth, he told only me. I'll not make the same mistake. Send copies of that letter to every corner to the realm, from the Arbor to the Wall. The time has come to choose. Let no man claim ignorance as an excuse.",
    'created_at': datetime.strptime('2016-08-21T17:28:26', "%Y-%m-%dT%H:%M:%S"),
  })
  comment2 = Comment(**{
    'user': jon,
    'text': "I never met my mother. My father wouldn't even tell me her name. I don't know if she's living or dead. I don't know if she's a noblewoman or a fisherman's wife or a whore...",
    'created_at': datetime.strptime('2016-08-21T15:02:06', "%Y-%m-%dT%H:%M:%S"),
  })

  session.add(comment1)
  session.add(comment2)

  session.commit()

  product = es.index(index='artesanato', doc_type='product', body={
    'title': 'Vasos simples',
    'screenshot': 'images/products/vases.jpg',
    'description': "The wall fire and blood joffrey howland reed dontos hollard euron rhaenyra varys. Bael the bard king's landing the knights of summer fear cuts deeper than swords osha elia egg pyke. Catelyn the pointy end shireen greatjon the lone wolf dies but the pack survives lady. Greywind ruby ford areo hotah, jaime jory great wyk promise me ned oh my sweet summer child.",
    'price_value': 2.99,
    'price_currency': 'USD',
    'comments': [comment1.id, comment2.id],
    'tags': ['vase', 'recife'],

    'seller': stannis.id,
  })
  es.index(index='artesanato', doc_type='product', body={
    'title': 'Vasos de areia',
    'screenshot': 'images/products/areias.jpg',
    'description': "Varys brandon stark and now it begins lysa lannisport wyman manderly sansa benjen bran watcher on the walls. Lemonwood aenys sandor, the north remembers gregor rhaenyra only Cat crownlands elia aemon nymeria. Margaery stormlands euron sandor ashara.\n\nStarfall astapor neck riverlands, what is dead may never die howland reed khal drogo fuck your water bring me wine jon snow bloodraven you know nothing viserys baelor vaes dothrak.",
    'price_value': 2.99,
    'price_currency': 'USD',
    'comments': [],
    'tags': ['vase', 'caruaru'],

    'seller': stannis.id,
  })

  session.begin()

  comment1.product_id = product['_id']
  comment2.product_id = product['_id']

  session.commit()
