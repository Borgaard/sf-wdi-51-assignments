import datetime
# peewee is a small and simple ORM, like mongoose but simpler
# import everything from peewee because we might need it
from peewee import *

# We use the built in SqliteDatabase() function from peewee 
# to save a reference to a DB file to a DATABASE variable
# all caps is a constant and we do not want others to change it.
# Define a file to hold our database. it will show up as soon as we populate our tables with data
DATABASE = SqliteDatabase('brockit.db')

# this is like models in mongoose application
# Our Sub model is pretty simple, just a name and description for now
class Sub(Model):
	# populate timestamp with data from this moment in time
	# timestamp = DateTimeField(default=datetime.datetime.now)
	# Characterfield has size limit to how many characters it accepts.
	name = CharField() 
	#  no character limit in textfield, can pass in validations
	description = TextField()
	# meta describes extra options to be added, such as ordering when res comes back, you could also add an extra function that is static and add over every single instance of the Sub model
	class Meta:
		database = DATABASE
		# ordered on creation date. stored as tupple so you can use order_by options to craft how data is ordered. timestamp requires a field in the model above
		order_by = ('-timestamp',)

# use this for comments
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
		order_by = ('-timestamp',) 


# We initialize a connection to the DATABASE, create a table for the Sub model, 
# and close the connection
def initialize():
	DATABASE.connect()
	# pass in models Sub and Post  as list []
	DATABASE.create_tables([Sub, Post, Comment], safe=True)
	# close connection to db
	DATABASE.close()