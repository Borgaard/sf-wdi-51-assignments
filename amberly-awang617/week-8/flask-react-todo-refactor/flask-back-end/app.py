import os

from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_cors import CORS

basedir = os.path.abspath(os.path.dirname(__file__))

app = Flask(__name__)
# cors = CORS(app, resources = {r"*":{"origins":"*"}})
CORS(app, resources={r"/*": {"origins": "*"}})

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'db.todo')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False


# Init Database
db = SQLAlchemy(app)

#Init Marshmallow
marshmallow = Marshmallow(app)


DEBUG = True
PORT = 8000

@app.route('/')
def hello_world():
    return 'Hello World'

@app.route('/todo', methods=['GET','POST'])
@app.route('/todo/<todoid>', methods=['GET', 'POST', 'DELETE'])
def get_or_create_todo(todoid=None):
    from models import Todo
    if todoid == None and request.method == 'GET':
        return Todo.get_todos()
    elif todoid == None and request.method == 'POST':
        body = request.json['body']
        priority = request.json['priority']
        completed = request.json['completed']
        return Todo.create_todo(body, priority, completed)
    elif todoid != None and request.method == 'GET':
        return Todo.get_todo(todoid)
    elif todoid != None and request.method == 'POST':
        new_body = request.json['body']
        new_priority = request.json['priority']
        new_completed = request.json['completed']
        return Todo.update_todo(todoid, new_body, new_priority, new_completed)
    else: 
        return Todo.delete_todo(todoid)

if __name__ == '__main__':
    app.run(debug=DEBUG, port=PORT)