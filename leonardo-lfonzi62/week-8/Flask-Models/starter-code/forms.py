# import the tools and fields we need
from flask_wtf import FlaskForm as Form
from wtforms import TextField, TextAreaField, SubmitField

# import the Sub model
from models import Sub, Post, Comments

# create the class and variables to house Field definitions
class SubForm(Form): #  The SubForm class parent is from the Flaskform package we named as Form
# label for the input field can be put inside the field name ()
    name = TextField("Name this sub")
    description = TextAreaField("Add a description for the sub here")
    submit = SubmitField('Create Sub')

class PostForm(Form):
    user =TextField("By:")
    title = TextField("Title")
    text = TextAreaField("Content")
    submit = SubmitField("Create Post")

class CommentsForm(Form):
    author = TextField('By:')
    text = TextAreaField('Content')
    submit = SubmitField("Create Comment")