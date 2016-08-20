#!/usr/bin/env python

from flask import Flask, jsonify
from flask_graphql import GraphQLView

from models.products import db_session
from schema import schema

app = Flask(__name__)

app.add_url_rule('/data', view_func=GraphQLView.as_view(
  'data',
  schema=schema,
  graphiql=True,
))

@app.route('/data/status')
def status():
  return 'Everything is ok!'

@app.teardown_appcontext
def shutdown_session(expection=None):
  db_session.remove()


if __name__ == '__main__':
  app.run(debug=True)
