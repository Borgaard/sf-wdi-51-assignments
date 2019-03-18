# import the tools and fields we need
from flask_wtf import FlaskForm as Form
from wtforms import TextField, TextAreaField, SubmitField

  # import the Sub model
from models import Sub

class SubForm(Form):
    name = TextField("Name this sub")
    description = TextAreaField("Add a descriptions")
    submit = SubmitField("Create Sub")

class PostForm(Form):
    user = TextField("By:")
    title = TextField("Title")
    text = TextAreaField("Content")
    submit = SubmitField("Create Post")