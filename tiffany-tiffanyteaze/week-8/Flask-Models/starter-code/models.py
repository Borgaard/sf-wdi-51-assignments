import datetime
#import everything from peewee because we might need it
from peewee import *

DATABASE = SqliteDatabase('brockit.db')

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
    # relate the Post model to the Sub model
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
        order_by = ('-timestamp', )

def initialize(): 
    DATABASE.connect()
    DATABASE.create_tables([Sub, Post, Comment], safe=True)
    DATABASE.close()