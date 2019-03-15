import datetime
  # peewee is a small and simple ORM, like mongoose but simpler
from peewee import *

  # We use the built in SqliteDatabase() function from peewee 
  # to save a reference to a DB file to a DATABASE variable
DATABASE = SqliteDatabase('breddit.db')

# Our Sub model is pretty simple, just a name and description for now
class Sub(Model):
	timestamp =  DateTimeField(default=datetime.datetime.now)
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
	# relate post to sub
	sub = ForeignKeyField(Sub, backref='posts')

	class Meta:
		database = DATABASE
		order_by = ('-timestamp',)


# We initialize a connection to the DATABASE, create a table for the Sub model, 
# and close the connection
def initialize():
    DATABASE.connect()
    DATABASE.create_tables([Sub, Post], safe=True)
    DATABASE.close()