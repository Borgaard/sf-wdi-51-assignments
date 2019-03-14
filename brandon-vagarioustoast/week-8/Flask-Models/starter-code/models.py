import datetime
# import everything from peewee because we might need it
from peewee import *

# define a file to hold our database
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
    # relate the Post tot the Sub model

    sub = ForeignKeyField(Sub, backref='posts')

    class Meta:
        database = DATABASE
        order_by = ('-timestamp',)


def initialize():
    DATABASE.connect()
    DATABASE.create_tables([Sub, Post], safe=True)
    DATABASE.close()
