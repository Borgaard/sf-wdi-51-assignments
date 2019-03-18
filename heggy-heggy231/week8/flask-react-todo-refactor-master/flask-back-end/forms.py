from flask_wtf import FlaskForm as Form
from wtforms import TextField, TextAreaField, SubmitField

from models import Todo

class TaskForm(Form):
  body = TextField("Task:")
  priority = TextField("Priority")
  completed = TextField("completed")
  submit = SubmitField('Create Task')