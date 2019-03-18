from flask_wtf import FlaskForm as Form
from wtforms import TextField, TextAreaField, SubmitField

from models import Sub, Post

class SubForm(Form):
  name = TextField("Name this sub:")
  description = TextAreaField("Sub description:")
  submit = SubmitField('Create Sub')

# from model for postForm>
  # timestamp = DateTimeField(default=datetime.datetime.now)
  # user = CharField()
  # title = CharField()
  # text = TextField()
  # sub = ForeignKeyField(Sub, backref="posts") 
# creating a PostForm Class
class PostForm(Form):
  user = TextField("By:")
  title = TextField("Title")
  text = TextAreaField("Content")
  submit = SubmitField('Create Post')

# MODEL of COMMENT: file that we can use all the from for my app
  # username = CharField()
  # title = CharField()
  # comment = TextField()
class CommentForm(Form):
  username = TextField("By:")
  title = TextField("Title")
  comment = TextAreaField("Content")
  submit = SubmitField('Create Comment')