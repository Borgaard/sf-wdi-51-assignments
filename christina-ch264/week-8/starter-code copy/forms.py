  # import specific part of package Flaskform and rename it Form variable to make it easier to work with
from flask_wtf import FlaskForm as Form
from wtforms import TextField, TextAreaField, SubmitField

# import the Sub model
from models import Sub, Post, Comment

# create the class and variables to house Field definitions
class SubForm(Form):
# pass in name of field as string
		name = TextField("Name this sub")
		description = TextAreaField("Add a description for the sub here")
		submit = SubmitField('Create Sub')

# add to sub.html, because user should add post within sub
class PostForm(Form):
    user = TextField("By:")
    title = TextField("Title")
    text = TextAreaField("Content")
    submit = SubmitField('Create Post')

class CommentForm(Form):
    user = TextField("By:")
    text = TextAreaField("Comment:")
    submit = SubmitField('Create Comment')