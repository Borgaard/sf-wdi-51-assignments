from flask import Flask, g
from flask import render_template, flash, redirect, url_for
# this import makes our connection to models
import models
from forms import SubForm, PostForm, CommentForm


DEBUG = True
PORT = 8000

app = Flask(__name__)
app.secret_key = 'adkjfalj.adflja.dfnasdf.asd'

@app.before_request
def before_request():
    g.db = models.DATABASE
    g.db.connect()

@app.after_request
def after_request(response):
    g.db.close()
    return response

@app.route('/', methods=['GET', 'POST'])
def index():
    #a form variable representing subform
    form = SubForm()
    #check if the form submission is valid
    if form.validate_on_submit():
        #if it is, create a new Sub and redirect the user
        models.Sub.create(name=form.name.data.strip(), description=form.description.data.strip())

        flash("New sub registered. Called: {}".format(form.name.data))
        return redirect('/r')
        #if it isn't, send them back to the form
    return render_template('new_sub.html', title="New Sub", form=form)


@app.route('/r')
@app.route('/r/')
@app.route('/r/<sub>', methods=["GET", "POST"])
def r(sub=None):
    if sub == None:
        #get all subs
        subs = models.Sub.select().limit(100)
        #send the retrieved subs to our subs.html template
        return render_template("subs.html", subs=subs)
    else:
        #use the <sub> id to find the right sub
        sub_id = int(sub)
        sub = models.Sub.get(models.Sub.id == sub_id)
        posts = sub.posts

        form = PostForm()
        if form.validate_on_submit():
            models.Post.create(
                user=form.user.data.strip(),
                title=form.title.data.strip(),
                text=form.text.data.strip(),
                sub=sub)
        #send found sub to right template
            return redirect("/r/{}".format(sub_id))
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

        commentData = post.comments

        form = CommentForm()
        if form.validate_on_submit():
            models.Comment.create(
                user=form.user.data.strip(),
                text=form.text.data.strip(),
                post=post)
            return redirect("/posts/{}".format(post_id))
        

        return render_template('post.html', post=post, form=form, comment=commentData)

@app.route('/comments')
@app.route('/comments/')
@app.route('/comments/<id>')
def comments(id=None):
    if id == None:
        comments = models.Comment.select().limit(100)
        return render_template('comments.html', comments=comments)
    else:
        comment_id = int(id)
        comment = models.Comment.get(models.Comment.id == comment_id)
        return render_template('comment.html', comment=comment)


if __name__ == '__main__':
    # before our app runs we initialize a connection to the models
    models.initialize()
    app.run(debug=DEBUG, port=PORT)
