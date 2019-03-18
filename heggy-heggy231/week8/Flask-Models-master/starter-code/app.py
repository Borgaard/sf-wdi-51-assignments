from flask import Flask, g
from flask import render_template, flash, redirect, url_for

from forms import SubForm, PostForm, CommentForm
import models

DEBUG = True
PORT = 8000

app = Flask(__name__)
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

@app.route('/', methods=['GET', 'POST'])
def index():
	# the form variable we send down to the template needs to be added here
	form = SubForm()
	if form.validate_on_submit():
		models.Sub.create(name=form.name.data.strip(), description=form.description.data.strip())

		flash("New sub registered. Called: {}".format(form.name.data))
		return redirect('/r')
	return render_template('new_sub.html', title="New Sub", form=form)


@app.route('/r')
@app.route('/r/')
@app.route('/r/<sub>', methods=['GET', 'POST'])
def r(sub=None):
	if sub == None:
		subs = models.Sub.select().limit(100) # now I am looking into Sub Model
		return render_template("subs.html", subs=subs) 
		# go to template, subs=subs is sending all the data inside of subs=models.Sub.select()
	else:
		sub_id = int(sub)
# Find the right Sub
		sub = models.Sub.get(models.Sub.id == sub_id) # sub.id gets created implicitly
		posts = sub.posts #  sub = ForeignKeyField(Sub, backref="posts") 

# Define the form for Posts
		form = PostForm()
		if form.validate_on_submit():
			models.Post.create(
				user=form.user.data.strip(),
				title=form.title.data.strip(),
				text=form.text.data.strip(),
				sub=sub)
				 #sub = ForeignKeyField(Sub, backref="posts" this connects user to that post
			flash("New post created")
# error message
# return redirect(f'/r/{sub_id}')
			return redirect("/r/{}".format(sub_id))
		return render_template("sub.html", sub=sub, posts=posts, form=form)

# Add a reference to your new form to the appropriate function in app.py. Comments should be attached to posts so think about where this form reference should be.
# username = TextField("By:")
#   title = TextField("Title")
#   comment = TextAreaField("Content")
#   submit = SubmitField('Create Comment')
@app.route('/posts')
@app.route('/posts/')
@app.route('/posts/<id>', methods=['GET', 'POST'])
def posts(id=None):
	if id == None:
		posts = models.Post.select().limit(100)
		return render_template('posts.html', posts=posts)
	else:
		post_id = int(id)
		post = models.Post.get(models.Post.id == post_id)
		# get the post comments
		comments = post.comments  # post = ForeignKeyField(Post, backref="comments") This give you access to everything in comments!!!
		
		# Define the form for comments
		form = CommentForm()
		if form.validate_on_submit():
			models.Comment.create( #creating a instance of Comment
				username = form.username.data.strip(),
				title = form.title.data.strip(),
				comment = form.comment.data.strip(),
				post=post #post = ForeignKeyField(Post, backref="comments"), post secon val = models.Post.get(models.Post.id == post_id) , left side is from models.py
			)
		# right side post = models.Post.get(models.Post.id == post_id)
		return render_template('post.html', post=post, comments=comments, form=form)

# create route only for comments
@app.route('/comments')
@app.route('/comments/')
@app.route('/comments/<id>', methods=['GET', 'POST'])
def comments(id=None):
	if id == None:
		comments = models.Comment.select().limit(100)
		return render_template('comments.html', comments=comments)
	else:
		comment_id = int(id)
		comment = models.Comment.get(models.Comment.id == Comment_id)
		# get the post comments
		comments = post.comments  # post = ForeignKeyField(Post, backref="comments") This give you access to everything in comments!!!
		
		# right side post = models.Post.get(models.Post.id == post_id)
		return render_template('comment.html', comment=comment, comments=comments, form=form)

if __name__ == '__main__':
	models.initialize()
	app.run(debug=DEBUG, port=PORT)
