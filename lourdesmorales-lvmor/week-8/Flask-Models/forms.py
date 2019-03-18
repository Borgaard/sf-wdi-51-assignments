from flask_wtf import FlaskForm as Form
from wtforms import TextField, TextAreaField, SubmitField

# or import models
from models import Sub

# contains fields html form has, name fields match model fields


class SubForm(Form):
    name = TextField("Name this sub:")
    description = TextAreaField("Sub description:")
    submit = SubmitField('Create Sub')

class PostForm(Form):
    user = TextField("By:")
    title = TextField("Title")
    text = TextAreaField("Content")
    submit = SubmitField('Create Post')

class CommentForm(Form):
    user = TextField("By:")
    # created_date = DateTimeField()
    text = TextAreaField("Content")
    submit = SubmitField("Create Comment")

