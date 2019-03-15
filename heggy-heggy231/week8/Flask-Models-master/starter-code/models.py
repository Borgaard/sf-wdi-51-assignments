import datetime
# peewee is a small and simple ORM, like mongoose but simpler
from peewee import *

DATABASE = SqliteDatabase('breddit.db')

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

def initialize():
  DATABASE.connect()
  DATABASE.create_tables([Sub, Post], safe=True)
  DATABASE.close()