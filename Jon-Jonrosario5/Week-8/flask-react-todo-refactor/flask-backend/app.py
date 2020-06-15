import os

from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

basedir = os.path.abspath(os.path.dirname(__file__))

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'db.todos')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

marshmallow = Marshmallow(app)


DEBUG = True
PORT = 8000


#Set to todo Home Page
@app.route('/')
def hello_world():
    return 'My Todos Will Work Soon'

@app.route('/todo', methods=['Get'])
@app.route('/todo', methods=['POST'])
@app.route('/todo/<todoid>', methods=['DELETE'])
@app.route('/todo/<todoid>', methods=['Put'])
def get_or_create_todo(todoid=None):
    from models import Todo
    if todoid == None and request.method == 'GET':
        return Todo.get_todos()
    elif todoid != None and request.method == 'DELETE':
        return Todo.delete_todo(todoid)
    elif todoid != None and request.method == 'PUT':
        return Todo.edit_todo(todoid)
    else:
        todobody = request.json['todobody']
        priority = request.json['priority']
        completed = request.json['completed']
        return Todo.create_todo(todobody,priority,completed)


        






if __name__ == '__main__':
    app.run(debug=DEBUG, port=PORT)
