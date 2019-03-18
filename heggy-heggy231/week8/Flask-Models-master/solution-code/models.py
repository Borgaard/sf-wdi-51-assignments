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

# what form.py has
#   user = TextField("By:")
#   title = TextField("Title")
#   text = TextAreaField("Content")
#   submit = SubmitField('Create Post')
class Post(Model):
  timestamp = DateTimeField(default=datetime.datetime.now)
  user = CharField()
  title = CharField()
  text = TextField()
  sub = ForeignKeyField(Sub, backref="posts") # Looking back at Model Sub => ForeignKeyField(Sub,

  class Meta:
    database = DATABASE
    order_by = ('-timestamp',)

# step1)  Define a model

  # username = TextField("By:")
  # title = TextField("Title")
  # comment = TextAreaField("Content")
class Comment(Model):
  timestamp = DateTimeField(default=datetime.datetime.now)
  username = CharField()
  title = CharField()
  comment = TextField()
  post = ForeignKeyField(Post, backref="comments")  # connecting to Post model 

  class Meta:
    database = DATABASE
    order_by = ('-timestamp',)

def initialize():
  DATABASE.connect()
  DATABASE.create_tables([Sub, Post], safe=True)
  DATABASE.close()
