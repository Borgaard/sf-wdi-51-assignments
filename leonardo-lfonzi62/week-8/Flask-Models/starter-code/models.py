import datetime
  # peewee is a small and simple ORM, like mongoose but simpler

from peewee import * #Sqlite, CharField Textfield come from peewee 


    # We use the built in SqliteDatabase() function from peewee 
    # ALL CAPS is a naming convention for constant vars in python
    #Define a file to hold our database
DATABASE = SqliteDatabase('brockit.db')

  # Setup Subreddit model with a name and description 
class Sub(Model): # model passing into the sub class is coming from peewee
    timestamp = DateTimeField(default = datetime.datetime.now ) # wherenver a sub is created , the timestamp is equal to the the current time.
    name = CharField()
    description = TextField()


    class Meta: # managing the model to make sure it has access to the proper database ?? tells the data which database it should be saved too
        database = DATABASE
        order_by = ('-timestamp',) # stored as a tuple , can have multiple ways to sort by order by

class Post(Model):
   timestamp = DateTimeField(default = datetime.datetime.now )
   text = TextField()
   title = CharField()
   text = TextField()

   # relate the Post to the Sub model
   sub = ForeignKeyField(Sub, backref='posts')

   class Meta:
     database = DATABASE
     order_by = ('-timestamp',)

class Comments(Model):
  timestamp = DateTimeField(default = datetime.datetime.now )
  author = CharField()
  text = TextField()
  
  post = ForeignKeyField(Post, backref='comments')

  class Meta:
    database = DATABASE
    order_by = ('-timestamp',)

  # We initialize a connection to the DATABASE,  
#then create a table for the Sub model, 
  # and finally close the connection from the database
def initialize():
    DATABASE.connect()
    DATABASE.create_tables([Sub, Post, Comments], safe=True) # passing in the models as a list. helpful for when we have more than one subreddit model
    DATABASE.close()