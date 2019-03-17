# python os that gives you access to environment variables
import os

from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow

# an object that has access to Flask reference
# you're adding configuration to Flask app
# the dunder is an environment variable name which will hold the value of whatever file you're in
# the default file you're in is called main
app = Flask(__name__)

# Set Base Directory
# our database should be created in the current folder we are in
# SQLite is a database that is server-less
basedir = os.path.abspath(os.path.dirname(__file__))

# Setup Database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'db.reddit')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Init Database
db = SQLAlchemy(app)

#Init Marshmallow
marshmallow = Marshmallow(app)

# specific to developer environment
# every time your app breaks you should get an exception
# in production set debug to false
DEBUG = True
PORT = 8000

@app.route('/sub', methods=['GET'])
@app.route('/sub', methods=['POST'])
@app.route('/sub/<subid>', methods=['GET'])
def get_or_create_sub(subid=None):
    from models import Sub
    if subid == None and request.method == 'GET':
        return Sub.get_subs()
    elif subid == None:
        name = request.json['name']
        description = request.json['description']

        return Sub.create_sub(name, description)
    else:
        return Sub.get_sub(subid)

@app.route('/post', methods=['POST', 'GET'])
@app.route('/post/<postid>', methods=['GET'])
def get_create_post(postid=None):
    from models import Post
    if postid == None and request.method == 'GET':
        return Post.get_posts()
    elif postid == None:
        user = request.json['user']
        title = request.json['title']
        text = request.json['text']
        sub = request.json['sub']

        return Post.create_post(user, title, text, sub)
    else:
        return Post.get_post(postid)

@app.route('/comment', methods=['POST', 'GET'])
@app.route('/comment/<commentid>', methods=['GET'])
def get_create_comment(commentid=None):
    from models import Comment
    if commentid == None and request.method == 'GET':
        return Comment.get_comments()
    elif commentid == None:
        user = request.json['user']
        text = request.json['text']
        post = request.json['post']

        return Comment.create_comment(user, text, post)
    else:
        return Comment.get_comment(commentid)

# when you put it before method you're saying my method is now a route
# called a decorator
# @app.route('/')
# def hello_world():
#     return 'Hello World'

if __name__ == '__main__':
    app.run(debug=DEBUG, port=PORT)