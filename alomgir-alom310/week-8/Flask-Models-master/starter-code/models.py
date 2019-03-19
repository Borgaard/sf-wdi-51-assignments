import datetime
  # peewee is a small and simple ORM, like mongoose but simpler
from peewee import *
  # import everything from peewee cause we might need it

  # We use the built in SqliteDatabase() function from peewee 
  # to save a reference to a DB file to a DATABASE variable
DATABASE = SqliteDatabase('breddit.db')
  #define a file to hold our database

  # Our Sub model is pretty simple, just a name and description for now
class Sub(Model):
    timestamp = DateTimeField(default=datetime.datetime.now)
    name = CharField()
    description = TextField()

    class Meta:
        database = DATABASE
        order_by = ('-timestamp',)

class Post(Model):
    timestamp = DateTimeField(default=datetime.datetime.now)
    user = CharField()
    title = CharField()
    text = TextField()
    #relate the post to the Sub model

    sub = ForeignKeyField(Sub, backref="posts")

    class Meta:
        database = DATABASE
        order_by = ('-timestamp',)

class Comment(Model):
    timestamp = DateTimeField(default=datetime.datetime.now)
    user = CharField()
    text = TextField()

    post = ForeignKeyField(Post, backref="comments")


    class Meta:
        database = DATABASE
        order_by = ('-timestamp',)



  # We initialize a connection to the DATABASE, create a table for the Sub model, 
  # and close the connection
def initialize():
    DATABASE.connect()
    DATABASE.create_tables([Sub, Post, Comment], safe=True)
    DATABASE.close()