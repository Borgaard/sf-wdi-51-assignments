import os
# import req object from flask
from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

basedir = os.path.abspath(os.path.dirname(__file__))


# Setup Database
# his is a serverless db. in mongoose we first ran a server and then created a database. sql light does not additional server. it creates a db file in the currrent folder you are in. instead of running on server. SQLlite is lightweight database, you create a simple db file. use postgress when you deploy on heroku
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'db.reddit')
# you attach this configuration to your flask app.
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Init Database, we call db object db and we pass flask app object into 
db = SQLAlchemy(app)

#Init Marshmallow
marshmallow = Marshmallow(app)

# run my flask app in testing to true, in production to false
DEBUG = True
PORT = 8000

@app.route('/')
def hello_world():
    return 'Hello World'

@app.route('/todos', methods=['POST', 'GET'])
@app.route('/todos/<todoid>', methods=['GET', 'PUT', 'DELETE'])
# change method name to get_or_create to know what method does
def get_create_put_delete_todo(todoid=None):
	from models import Todo
	if todoid==None and request.method == 'GET':
		return Todo.get_todos()
	elif todoid == None:
		print(request.json)
		body = request.json['body']
		priority = request.json['priority']
		completed = request.json['completed']
		return Todo.create_todo(body, priority, completed)
	elif todoid and request.method == 'PUT':
		body = request.json['body']
		priority = request.json['priority']
		completed = request.json['completed']
		return Todo.edit_todo(todoid, body, priority, completed)
	elif todoid and request.method == 'DELETE':
		print('Delete')
		print(request.json)
		print(todoid)
		body = request.json['body']
		priority = request.json['priority']
		completed = request.json['completed']
		return Todo.delete_todo(todoid, body, priority, completed)
		# return json_response({})
	else:
		return Todo.get_todo(todoid)


# @app.route('/todo/<todoid>', methods=['DELETE'])




if __name__ == '__main__':
  app.run(debug=DEBUG, port=PORT)