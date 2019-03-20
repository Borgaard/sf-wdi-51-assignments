import os

from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Set variable 'basedir' to user's project directory
basedir = os.path.abspath(os.path.dirname(__file__))

# Set up database to file 'db.todo'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'db.todo')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize database
db = SQLAlchemy(app)

# Initialize Marshmallow
marshmallow = Marshmallow(app)

DEBUG = True
PORT = 8000

@app.route('/todos', methods=['POST', 'GET'])
@app.route('/todos/<todo_id>', methods=['GET', 'PUT'])
# Test initial backend server
# def hello_world():
#   return 'Hello, world'
def get_or_create_todo(todo_id=None):
  from models import Todo
  if todo_id == None and request.method == 'GET':
    return Todo.get_all_todos()
  elif todo_id == None:
    body = request.json['body']
    priority = request.json['priority']
    completed = request.json['completed']

    return Todo.create_todo(body, priority, completed)
  else:
    return Todo.get_todo(todo_id)


@app.route('/todos/<todo_id>', methods=['DELETE', 'PUT'])
def delete_or_update_todo(todo_id=None):
  from models import Todo
  if request.method == 'PUT':
    # [] THESE DON'T PRINT
    print(request)
    print(request.json['body'])
    # [] DOESN'T SEEM TO BE GRABBING AN UPDATED BODY
    req = request.get_json()
    print(req)
    # [] WHAT DOES THE ** DO?
    return Comment.update_todo(todo_id, **req)
  else:
    return Todo.delete_todo(todo_id)

if __name__ == '__main__':
  app.run(debug=DEBUG, port=PORT)