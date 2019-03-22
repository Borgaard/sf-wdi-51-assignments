
import os
from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
app = Flask(__name__)

# Set Base Directory
basedir = os.path.abspath(os.path.dirname(__file__))

# Setup Database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'db.reddit')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Init Database
db = SQLAlchemy(app)

#Init Marshmallow
marshmallow = Marshmallow(app)

DEBUG = True
PORT = 8000


@app.route('/sub', methods=['GET', 'POST'])
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


@app.route('/post', methods=['GET','POST'])
@app.route('/post/<postid>', methods=['GET'])
def get_create_post(postid=None):
    from models import Post
    if postid == None and request.method=='GET':
        return Post.get_posts()
    elif postid == None:
        user = request.json['user']
        title = request.json['title']
        text = request.json['text']
        sub = request.json['sub']

        return Post.create_post(user, title, text, sub)
    else:
        return Post.get_post(postid)




@app.route('/comment', methods=['GET','POST'])
@app.route('/comment/<commentid>', methods=['GET'])
def get_create_comment(commentid=None):
    from models import Comment
    if commentid == None and request.method=='GET':
        return Comment.get_comments()
    elif commentid == None:
        user = request.json['user']
        text = request.json['text']
        post = request.json['post']

        return Comment.create_comment(user, text, post)
    else:
        return Comment.get_comment(commentid)
# @app.route('/')
# def hello_world():
#     return 'Hello World'

if __name__ == '__main__':
    app.run(debug=DEBUG, port=PORT)