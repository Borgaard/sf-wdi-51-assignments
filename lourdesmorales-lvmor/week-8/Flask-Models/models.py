import datetime
# peewee is a small and simple ORM, like mongoose but simpler
from peewee import *

DATABASE = SqliteDatabase('breddit.db')


class Sub(Model):
  # when sub created, need timestamp because added to Meta
    timestamp = DateTimeField(default=datetime.datetime.now)
    name = CharField()
    description = TextField()

    class Meta:
        database = DATABASE
    # order based on creation date, stored as tuple
        order_by = ('-timestamp',)


class Post(Model):
    timestamp = DateTimeField(default=datetime.datetime.now)
    user = CharField()
    title = CharField()
    text = TextField()
    # relate the post to the Sub model
    sub = ForeignKeyField(Sub, backref="posts")

    class Meta:
        database = DATABASE
        order_by = ('-timestamp',)

class Comment(Model):
    timestamp = DateTimeField(default=datetime.datetime.now)
    user = CharField()
    # created_date = DateTimeField(default=datetime.datetime.now)
    text = TextField()
    post = ForeignKeyField(Post, backref="comments")

    class Meta:
        database = DATABASE
        order_by = ('-timestamp',)


def initialize():
    DATABASE.connect()
    DATABASE.create_tables([Sub, Post, Comment], safe=True)
    DATABASE.close()
