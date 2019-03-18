from flask import Flask, g
from flask import render_template, flash, redirect, url_for
# This import makes our connection to the models
import models
from forms import SubForm, PostForm, CommentForm


DEBUG = True
PORT = 8000

app = Flask(__name__)
app.secret_key = 'adkjfalj.adflja.dfnasdf.asd'

# Handle requests when the come in (before) and when they complete (after)
# route is attached to before_request function
@app.before_request
def before_request():
    # """Connect to the DB before each request."""
    # we get access to constant g variable because we imported it
    g.db = models.DATABASE
    g.db.connect()

@app.after_request
def after_request(response):
    # """Close the database connection after each request."""
    g.db.close()
    return response

# The root route will revert back to a simpler version that just returns some text
# with POST, peewee created a db file brockit.db. we can use to form a postgres db later on
# allow root to accept get and post req
@app.route('/', methods=['GET', 'POST'])
def index():
    # the form variable we send down to the template needs to be added here
    form = SubForm()

    # check if form submission is valid, modify route below to handle new subs
    if form.validate_on_submit():
        # if it is, create a new sub and redirect
        models.Sub.create(
            name=form.name.data.strip(), 
            description=form.description.data.strip())
        return redirect('/r')
    # if not, sent back to form, we populate table with new sub
    return render_template("new_sub.html", title="New Sub", form=form)



@app.route('/r')
@app.route('/r/<sub>', methods=['GET', 'POST'])
def r(sub=None):
        if sub == None:
            # gets all subs up to a limit of 100. we leave select condition open.
            subs = models.Sub.select().limit(100)
            # send the retrieved subs to our subs.html template
            return render_template("subs.html", subs=subs)
        else:
            # Find the right Sub by using <sub> ID 
            sub_id = int(sub)
            # we are using pewees function names to interact with database with .get(), it takes in a comparison. same thing as db.findBy({_id}
            sub = models.Sub.get(models.Sub.id == sub_id)
                # sub.posts comes from models.py and from sub in line above. the backrefrerence allows relationship to exist
            postsData = sub.posts

            # Define the form for Posts
            form = PostForm()
            if form.validate_on_submit():
                models.Post.create(
                    user=form.user.data.strip(),
                    title=form.title.data.strip(), 
                    text=form.text.data.strip(),
                    # we associate the sub with the sub we already found from above. 
                    # relate posts with comments! 
                    sub=sub)

                flash("New post created")
                # redirect takes user to individual post page. redirect hits route again. get req skips form on validate and return user to html template
                return redirect("/r/{}".format(sub_id))

            # sends the retrieved subs down to the template, where sub variable (from line above) is equal to retrieved subs. this informs sub.name and sub.description in sub.html file.
        return render_template("sub.html", sub=sub, posts=postsData, form=form)



@app.route('/posts')
@app.route('/posts/<id>', methods=['GET', 'POST'])
def posts(id=None):
    if id == None:
        posts = models.Post.select().limit(100)
        return render_template('posts.html', posts=posts)
    else:
        post_id = int(id)
        post = models.Post.get(models.Post.id == post_id)

        commentData = post.comments

        # Define the form for Comments
        form = CommentForm()
        if form.validate_on_submit():
            models.Comment.create(
                user=form.user.data.strip(),
                text=form.text.data.strip(),
                # we associate the sub with the sub we already found from above. 
                # relate posts with comments! 
                post=post)
            return redirect("/posts/{}".format(post_id))
        return render_template('post.html', post=post, comments=commentData, form=form)

@app.route('/comments')
@app.route('/comments/<id>')
def comments(id=None):
    if id == None:
        comments = models.Comment.select(). limit(100)
        return render_template('comments.html', comments=comments)
    else:
        comment_id = int(id)
        comment = models.Comment.get(models.Comment.id == comment_id)
        return render_template('comment.html', comment=comment)



        return render_template('post.html', post=post, comments=commentData, form=form)



if __name__ == '__main__':
    # before our app runs we initialize a connection to the models
    models.initialize()
    app.run(debug=DEBUG, port=PORT)
