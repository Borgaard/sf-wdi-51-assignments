from flask import Flask, g
from flask import render_template, flash, redirect, url_for

# connect new_sub w/ app.js
from forms import SubForm, PostForm, CommentForm
import models

DEBUG = True
PORT = 8000

app = Flask(__name__)
app.secret_key = 'adkjfalj.adflja.dfnasdf.asd'

# Handle requests when the come in (before) and when they complete (after)
@app.before_request
def before_request():
    """Connect to the DB before each request."""
    g.db = models.DATABASE
    g.db.connect()


@app.after_request
def after_request(response):
    """Close the database connection after each request."""
    g.db.close()
    return response


@app.route('/', methods=['GET', 'POST'])
def index():
    # form variable represenditing subform
    form = SubForm()
    # check if form submission is valid
    if form.validate_on_submit():
      # if it is , createa new sub and redirect the user
        models.Sub.create(
            name=form.name.data.strip(),
            description=form.description.data.strip())

        flash("New sub registered. Called: {}".format(form.name.data))
        return redirect('/r')

        # if not, send them back to the form
    return render_template('new_sub.html', title="New Sub", form=form)


@app.route('/r')
@app.route('/r/')
@app.route('/r/<sub>', methods=['GET', 'POST'])
def r(sub=None):
    if sub == None:
      # get all subs
        subs = models.Sub.select().limit(100)
        return render_template("subs.html", subs=subs)
    else:
        # use the <sub> ID to find the right Sub
        sub_id = int(sub)
        # read use .get, want to loop over - like db.fimd in express
        sub = models.Sub.get(models.Sub.id == sub_id)
        # called posts postData - sub.post coming from models.py backref sub
        posts = sub.posts

        # Define the form for Posts
        form = PostForm()
        if form.validate_on_submit():
            models.Post.create(
                user=form.user.data.strip(),
                title=form.title.data.strip(),
                text=form.text.data.strip(),
                sub=sub)

            flash("New post created")
            return redirect("/r/{}".format(sub_id))
            # send our found sub to the template- the retrieved subs to our subs.html template
        return render_template("sub.html", sub=sub, posts=posts, form=form)


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
        comments = post.comments

        form = CommentForm()
        if form.validate_on_submit():
            models.Comment.create(
                user = form.user.data.strip(),
                # created_date = form.created_date.data.strip(),
                text = form.text.data.strip(),
                post = post)
            flash("New comment created")
            return redirect("/posts/{}".format(post_id))
        
        flash("Serving post page")
        return render_template('post.html', post=post, comments=comments, form=form)


if __name__ == '__main__':
    models.initialize()
    app.run(debug=DEBUG, port=PORT)
