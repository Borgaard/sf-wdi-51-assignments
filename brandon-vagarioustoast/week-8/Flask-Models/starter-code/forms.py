from flask_wtf import FlaskForm as Form
from wtforms import TextField, TextAreaField, SubmitField

from models import Sub, Post


class SubForm(Form):
    name = TextField("Name of the sub")
    description = TextAreaField("What is this sub about?")
    submit = SubmitField("Create Sub")


class PostForm(Form):
    user = TextField("By:")
    title = TextField("Title")
    text = TextAreaField("Content")
    submit = SubmitField('Create Post')
