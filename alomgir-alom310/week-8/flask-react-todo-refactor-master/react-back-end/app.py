import os

from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Set Base Directory
basedir = os.path.abspath(os.path.dirname(__file__))

# Setup Database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'db.todo')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Init Database
db = SQLAlchemy(app)

#Init Marshmallow
marshmallow = Marshmallow(app)

DEBUG = True
PORT = 8000

@app.route('/todos', methods=['POST', 'GET'])
@app.route('/todos/<todoid>', methods=['GET'])
def get_or_create_todo(todoid=None):
    from models import Todo
    if todoid == None and request.method == 'GET':
        return Todo.get_todos()

    elif todoid == None:
        body = request.json['body']
        priority = request.json['priority']
        completed = request.json['completed']
        return Todo.create_todo(body, priority, completed)

    else:
        return Todo.get_todo(todoid)


if __name__ == '__main__':
    app.run(debug=DEBUG, port=PORT)