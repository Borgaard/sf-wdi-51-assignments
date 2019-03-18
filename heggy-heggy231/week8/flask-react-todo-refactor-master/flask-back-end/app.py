from flask import Flask, g
from flask import render_template, flash, redirect, url_for, jsonify
from playhouse.shortcuts import model_to_dict, dict_to_model
from flask_cors import CORS
import sys

import models
from peewee import *
from forms import TaskForm

DEBUG = True
PORT = 8000


app = Flask(__name__)
CORS(app)
app.secret_key = 'adkjfalj.adflja.dfnasdf.asd'

# Handle requests when the come in (before) and when they complete (after)
@app.before_request
def before_request():
	# """Connect to the DB before each request."""
	g.db = models.DATABASE
	g.db.connect()

@app.after_request
def after_request(response):
# """Close the database connection after each request."""
	g.db.close()
	return response

# whenever I go to the root it will redirect me tp /api/todos
@app.route('/', methods=['GET', 'POST'])
def index():
	return redirect('/api/todos')

@app.route('/api/todos')
@app.route('/api/todos/')
@app.route('/api/todos/<task>', methods=['GET'])
def todos(task=None):
  if task == None:
    tasks = models.Todo.select().limit(100) # now I am looking into Sub Model
    results = []
    print ("^%&$&^", file=sys.stderr)
    for task in tasks:
      results.append(model_to_dict(task))
		
    return jsonify({"todos": results})
		# go to template, subs=subs is sending all the data inside of subs=models.Sub.select()
  else:
    task_id = int(task)
# # Find the right Sub
# 		sub = models.Sub.get(models.Sub.id == sub_id) # sub.id gets created implicitly
# 		posts = sub.posts #  sub = ForeignKeyField(Sub, backref="posts") 


@app.route('/api/todos/', methods=['POST'])
def newtodos(task=None):
# # Define the form for Posts
    form = TaskForm()
# 		if form.validate_on_submit():
# strip() gets rid of extra string in a input
    print ("#################" + form.body.data.strip(), file=sys.stderr)

    print ("#################" + str(form.priority.data), file=sys.stderr)

    print ("#################" + str(form.completed.data), file=sys.stderr)


    models.Todo.create(
      body =form.body.data.strip(),
      priority = form.priority.data,
      completed = form.completed.data)
    return '0'
# 				user=form.user.data.strip(),
# 				title=form.title.data.strip(),
# 				text=form.text.data.strip(),
# 				sub=sub)
# 				 #sub = ForeignKeyField(Sub, backref="posts" this connects user to that post
# 			flash("New post created")
# # error message
# # return redirect(f'/r/{sub_id}')
# 			return redirect("/r/{}".format(sub_id))
# 		return render_template("sub.html", sub=sub, posts=posts, form=form)

# Add a reference to your new form to the appropriate function in app.py. Comments should be attached to posts so think about where this form reference should be.
# username = TextField("By:")
#   title = TextField("Title")
#   comment = TextAreaField("Content")
#   submit = SubmitField('Create Comment')


if __name__ == '__main__':
	models.initialize()
	app.run(debug=DEBUG, port=PORT)
