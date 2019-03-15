# import the tools and fields we need
from flask_wtf import FlaskForm as Form
# WTForms installs when installing flask_wtf
from wtforms import TextField, TextAreaField, SubmitField

# import Sub, Post, and Comment Models from models.py
from models import Sub, Post, Comment
# [] WHERE ARE WE USING THEM?

# create class SubForm that inherits from Form from flask_wtf
class SubForm(Form):
  # Fields come from WTForms
  # create variables for Fields
  # the strings inside the Field() are labels for the input fields
  name = TextField('Name this subreddit')
  description = TextAreaField('Add a description for this subreddit')
  submit = SubmitField('Create Sub')

# create a form for new posts
class PostForm(Form):
  user = TextField('By:')
  title = TextField('Title')
  text = TextAreaField('Content')
  submit = SubmitField('Create Post')

# create a form for new comments
class CommentForm(Form):
  user = TextField('By:')
  text = TextAreaField('Comment')
  submit = SubmitField('Add Comment')