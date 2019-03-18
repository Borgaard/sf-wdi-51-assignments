from flask_wtf import FlaskForm as Form
from wtforms import TextField, TextAreaField, SubmitField

from models import Sub, Post

class SubForm(Form):
  name = TextField("Name this sub:")
  description = TextAreaField("Sub description:")
  submit = SubmitField('Create Sub')

# creating a PostForm Class
class PostForm(Form):
  user = TextField("By:")
  title = TextField("Title")
  text = TextAreaField("Content")
  submit = SubmitField('Create Post')

# file that we can use all the from for my app
  # name = CharField()
  # comment = TextField()
class CommentForm(Form):
  username = TextField("By:")
  title = TextField("Title")
  comment = TextAreaField("Content")
  submit = SubmitField('Create Comment')