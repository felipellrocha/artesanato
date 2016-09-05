#!/usr/bin/env python

from flask import Flask, jsonify, request
from werkzeug.exceptions import abort
from flask_graphql import GraphQLView

from schema import (
  schema,
)

from datetime import datetime, timedelta

from data import (
  SECRET,
  EXPIRATION,
  ALGORITHM,
)

from models import (
  Profile,
)

from database import session

import jwt

import copy

app = Flask(__name__)

app.add_url_rule('/data', view_func=GraphQLView.as_view(
  'data',
  schema=schema,
  graphiql=True,
))

@app.route('/')
@app.route('/data/status')
def status():
  return 'Everything is ok!'

@app.route('/session/create', methods=['POST'])
def session_create():
  formUser = request.json.get('username')
  formPassword = request.json.get('password')

  user = session.query(Profile).filter(Profile.username == formUser).one()

  if not user: abort(400)
  if not formPassword == user.password: abort(400)

  payload = {
    'user_id': user.id,
    'exp': datetime.utcnow() + timedelta(days=EXPIRATION)
  }
  token = jwt.encode(payload, SECRET, ALGORITHM)

  return jsonify({
    'token': token.decode('utf-8'),
    'user': user.as_dict(),
  })

@app.teardown_appcontext
def shutdown_session(expection=None):
  session.remove()


if __name__ == '__main__':
  app.run(debug=True)
