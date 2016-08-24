#!/usr/bin/env python

from flask import Flask, jsonify, request
from werkzeug.exceptions import abort
from flask_graphql import GraphQLView

from models.products import db_session
from schema import ( schema, Profile )

from datetime import datetime, timedelta

from data import (
  getUserByUsername,
  SECRET,
  EXPIRATION,
  ALGORITHM,
)

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
  dataUser = getUserByUsername(formUser)
  dataPassword = dataUser.get('password')

  if not dataUser: abort(400)
  if not formPassword == dataPassword: abort(400)

  user = copy.copy(dataUser)
  del user['username']
  del user['password']

  payload = {
    'user_id': dataUser.get('id'),
    'exp': datetime.utcnow() + timedelta(days=EXPIRATION)
  }
  token = jwt.encode(payload, SECRET, ALGORITHM)
  return jsonify({
    'token': token.decode('utf-8'),
    'user': user,
  })

@app.teardown_appcontext
def shutdown_session(expection=None):
  db_session.remove()


if __name__ == '__main__':
  app.run(debug=True)
