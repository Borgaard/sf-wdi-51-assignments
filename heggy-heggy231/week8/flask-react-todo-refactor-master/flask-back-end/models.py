import datetime
# peewee is a small and simple ORM, like mongoose but simpler
from peewee import *

DATABASE = SqliteDatabase('heggytodo.db')

# important peewee doc: http://docs.peewee-orm.com/en/latest/peewee/models.html?highlight=charfield()
class Todo(Model):
  timestamp = DateTimeField(default=datetime.datetime.now)
  body = CharField() #name of the todo task body
  priority = IntegerField() #how important it is
  completed = BooleanField(default=False) #check mark if done but default it is not done

  class Meta:
    database = DATABASE
    order_by = ('-timestamp',)


# step1)  Define a comment model
# make sure that models have all the form field (like username, title) included
# and the type doesn't have to match 
  # username = TextField("By:")
  # title = TextField("Title")
  # comment = TextAreaField("Content")
  # submit = SubmitField('Create Comment')

def initialize():
  DATABASE.connect()
  DATABASE.create_tables([Sub, Post], safe=True)
  DATABASE.close()