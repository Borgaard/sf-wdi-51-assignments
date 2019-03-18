from flask import Flask, g
from flask import render_template, flash, redirect, url_for

import models # This imports makes our connection to the models (models.py)

#importing the forms.py file under the var name SubForm
from forms import SubForm, PostForm, CommentsForm


DEBUG = True
PORT = 9000

app = Flask(__name__)
app.secret_key = 'adkjfalj.adflja.dfnasdf.asd'

# handles requests when they come in (before)
# also gets a snapshot of the database before the request 
@app.before_request
def before_request():
    g.db = models.DATABASE
    g.db.connect()

    # g stands for gloabal 
    # access the DATABASE variable in models.py


@app.after_request
def after_request(response):
# close the database
    g.db.close()
    return response


@app.route('/', methods = ['GET','POST']) #allowing this route to accept GET and POST requests
def index():
    # form variable representing the Subform
    form = SubForm()
    # checking to see if the form is valid
    if form.validate_on_submit():
        # if it is , create a new Sub and redirect the user. models.Sub.create is creating a new instance of the sub class in the models.py
        models.Sub.create(
            name=form.name.data.strip(),
            description=form.description.data.strip())
        return redirect('/r')
    return render_template('new_sub.html', form = form)


@app.route('/r')
@app.route('/r/<sub>',methods=['GET','POST'])
def r(sub=None):
    if sub == None:
        # get all subs
        subs = models.Sub.select().limit(100)

        # send the retrieved subs to our subs.html template
        return render_template('subs.html', subs=subs)
    else:
        # use the <sub> ID to find the correct sub 
        sub_id = int(sub)
        found_sub = models.Sub.get(models.Sub.id == sub_id) # comparing the sub_id taken from the URL to a sub ID in the database table
        posts = found_sub.posts
        # validate the form
        form = PostForm()
        if form.validate_on_submit():
            models.Post.create(
                user = form.user.data.strip(),
                title = form.title.data.strip(),
                text = form.text.data.strip(),
                sub = found_sub
            )
            flash("New Post created")
             # Redirect back to the subreddit where the post was created
            return redirect("/r/{}".format(sub_id))

        return render_template('sub.html', sub=found_sub, posts =posts, form = form)


@app.route('/posts',)
@app.route('/posts/')
@app.route('/posts/<id>', methods=['GET', 'POST'])
def posts(id=None):
        if id == None:
            posts = models.Post.select().limit(100)
            return render_template('posts.html', posts=posts)
        else:
            post_id = int(id)
            single_post = models.Post.get(models.Post.id == post_id)
            comment_Data = single_post.comments

            form = CommentsForm()
            if form.validate_on_submit():
                models.Comments.create(
                    author = form.author.data.strip(),
                    text = form.text.data.strip(),
                    post = single_post
                )
                flash('New Comment Created')
                # Redirect back to the Post where the comment was created
            return redirect("/posts/{}".format(post_id))

            return render_template('post.html', post=single_post, comment = comment_Data)
@app.route('/comments')
@app.route('/comments/')
@app.route('/comments/<id>', methods=['GET', 'POST'])
def comments(id=None):
    if id == None:
        comments = models.Comments.select().limit(100)
        return render_template('comments.html', comments=comments)
    else:
        comment_id = int(id)
        comment = models.Comments.get(models.Comment.id == comment_id)
        return render_template('comment.html', comment=comment)

if __name__ == '__main__':
    models.initialize()
    app.run(debug=DEBUG, port=PORT)
