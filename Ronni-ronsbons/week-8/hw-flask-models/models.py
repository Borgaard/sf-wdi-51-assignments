# datetime comes from Flask
import datetime
# peewee is a small and simple ORM, like mongoose, but simpler
from peewee import *

# Sqlite, CharField, TextField come from peewee
# all-caps DATABASE is like a const variable, not to be changed
# define file to hold database
DATABASE = SqliteDatabase('brockit.db')


# set up model for Subreddit with a name and a description field
# Model comes from peewee
class Sub(Model):
  # set up timestamp field on the database with default as current datetime
  # [] WHY ARE THERE TWO DATETIME'S?  FIRST ONE IN VSCODE EXTENSION AUTOCOMPLETE PROMPT IS {}, SECOND ONE IS A LITTLE BRANCH LOOKING ICON
  timestamp = DateTimeField(default=datetime.datetime.now)
  # CharField has a default max # of characters limit
  # can put options into () of CharField, like validation, what type of characters allowed, etc.
  # [] WHY PARENTHESES AFTER CHARFIELD?
  name = CharField()
  description = TextField()

  # managing how Model accesses/connects to the database
  class Meta:
    database = DATABASE
    # stored as a tuple
    order_by = ('-timestamp',)


# set up model for posts
class Post(Model):
  timestamp = DateTimeField(default=datetime.datetime.now)
  user = CharField()
  title = CharField()
  text = TextField()
  # relate the Post model to the Sub model
  # backref='posts' ties posts to the Sub model
  sub = ForeignKeyField(Sub, backref='posts')

  class Meta:
    database = DATABASE
    order_by = ('-timestamp',)


class Comment(Model):
  timestamp = DateTimeField(default=datetime.datetime.now)
  user = CharField()
  text = TextField()
  # relate the Comment model to the Post model
  # backref='comments' ties comments to the Post model
  post = ForeignKeyField(Post, backref='comments')

  class Meta:
    database = DATABASE
    order_by = ('-timestamp',)


# make a connection to the database
# [] WHERE DO THE .CONNECT, .CREATE_TABLES, .CLOSE FUNCTIONS COME FROM?
# create a table in the database for the Sub model, Post model, and Comment model
# then close the connection to the database
# [] WHY WOULD YOU WANT TO CLOSE THE CONNECTION TO THE DATABASE?
def initialize():
  DATABASE.connect()
  DATABASE.create_tables([Sub, Post, Comment], safe=True)
  DATABASE.close()