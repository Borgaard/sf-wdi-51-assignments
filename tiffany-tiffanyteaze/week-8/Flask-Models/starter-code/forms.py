# import the tools and fields we need
from flask_wtf import FlaskForm as Form
from wtforms import TextField, TextAreaField, SubmitField

# import the Sub model
from models import Sub, Post, Comment

# create the class and variables to house Field definitions
class SubForm(Form):
    name = TextField("Name this sub")
    description = TextAreaField("Add a description for the sub here")
    submit = SubmitField('Create Sub')

class PostForm(Form):
    user = TextField("By: ")
    title = TextField("Title: ")
    text = TextAreaField("Content: ")
    submit = SubmitField("Create Post Submit: ")

class CommentForm(Form):
    user = TextField("By: ")
    text = TextAreaField("Comment: ")
    submit = SubmitField("Create Comment Submit: ")