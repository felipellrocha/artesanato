#!/usr/bin/env python

from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/')
def status():
  return 'Everything is ok!'

@app.route('/main')
def main():
  data = [
    {
      'id': '82598577-fef1-49af-b0b6-de3b2934519c',
      'title': 'Vasos simples',
      'screenshot': 'images/vases.jpg',
      'price': {
        'value': 2.99,
        'currency': 'USD',
      },
    },
    {
      'id': 'bfa60128-59aa-437b-a1ce-0876ce73bc7e',
      'title': 'Vasos de areia',
      'screenshot': 'images/areias.jpg',
      'price': {
        'value': 2.99,
        'currency': 'USD',
      },
    }
  ]
  return jsonify(data)

if __name__ == '__main__':
  app.run(debug=True)
