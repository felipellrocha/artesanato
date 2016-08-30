import uuid
from datetime import datetime

from sqlalchemy import (
  Column,
  Integer,
  String,
  DateTime,
  ForeignKey,
)
from sqlalchemy.orm import (
  relationship,
  backref,
)
from database import Base

class Comment(Base):
  __tablename__ = 'artesanato_comments'

  id = Column(String, primary_key=True, default=lambda: str(uuid.uuid4()))

  text = Column(String)
  created_at = Column(DateTime, default=lambda: datetime.now())
  user_id = Column(Integer, ForeignKey('artesanato_profiles.id'))
  product_id = Column(Integer, ForeignKey('artesanato_products.id'))

class Product(Base):
  __tablename__ = 'artesanato_products'

  id = Column(String, primary_key=True, default=lambda: str(uuid.uuid4()))

  title = Column(String)
  screenshot = Column(String)
  description = Column(String)
  price = Column(String)

  comments = relationship(Comment, uselist=True, backref=backref('product'))
  seller_id = Column(Integer, ForeignKey('artesanato_profiles.id'))
  seller = relationship('Profile')

class Profile(Base):
  __tablename__ = 'artesanato_profiles'

  id = Column(String, primary_key=True, default=lambda: str(uuid.uuid4()))

  first_name = Column(String)
  last_name = Column(String)
  description = Column(String)
  image = Column(String)
  username = Column(String)
  password = Column(String)

  products = relationship(Product, uselist=True, back_populates='seller')
  comments = relationship(Comment, uselist=True, backref=backref('user'))
