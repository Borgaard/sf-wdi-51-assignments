from flask_wtf import FlaskForm as Form 
from wtforms import TextField, TextAreaField, SubmitField

from models import Sub, Post, Comment

class SubForm(Form):
    name = TextField("Name this sub")
    description = TextAreaField("Add a description for the sub here")
    submit = SubmitField('Create Sub')

class PostForm(Form):
    user = TextField("By:")
    title = TextField("Title")
    text = TextAreaField("Content")
    submit = SubmitField('Create Post')

class CommentForm(Form):
    user = TextField("By:")
    text = TextAreaField("Content")
    submit = SubmitField('Create Comment')