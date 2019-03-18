# https://git.generalassemb.ly/sf-wdi-51/Flask-Models
import datetime
# peewee is a small and simple ORM, like mongoose but simpler
from peewee import *


# We use built-in SqliteDatabase() function from peewee
#  to save a reference to a DB file to a DATABASE variable
DATABASE = SqliteDatabase('breddit.db')

# Sub model is simple, name and description
class Sub(Model):
  timestamp = DateTimeField(default=datetime.datetime.now)
  name = CharField()
  description = TextField()


  class Meta:
    database = DATABASE
    order_by = ('-timestamp',)

class Post(Model):
  sub = ForeignKeyField(Sub, backref="posts") 
  timestamp = DateTimeField(default=datetime.datetime.now)
  user = CharField()
  title = CharField()
  text = TextField()


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
class Comment(Model):
  post = ForeignKeyField(Post, backref="comments")  # connecting to Post model 
  timestamp = DateTimeField(default=datetime.datetime.now)
  username = CharField()
  title = CharField()
  comment = TextField()


  class Meta:
    database = DATABASE
    order_by = ('-timestamp',)

# We initialize a connection to the DB, create a table for the Sub model,
#  and close the connection.
def initialize():
  DATABASE.connect()
  DATABASE.create_tables([Sub, Post], safe=True)
  DATABASE.close()