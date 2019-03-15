from flask import Flask, g
from flask import render_template, flash, redirect, url_for

# import models.py file
# in Flask and Python, you don't have to export something in order to import it
# convention that you don't need .py, it's like you're importing a module
import models
# import SubForm PostForm, CommentForm classes from forms.py
from forms import SubForm, PostForm, CommentForm

DEBUG = True
PORT = 8000

app = Flask(__name__)
app.secret_key = 'adkjfalj.adflja.dfnasdf.asd'


# handle requests when they come in (before)
# gets snapshot of database before request
@app.before_request
def before_request():
    # g stands for global
    # access DATABASE variable in models.py file
    g.db = models.DATABASE
    g.db.connect()


# handle requests when they complete (after)
# gets response and closes connection to database
@app.after_request
def after_request(response):
    # close connection to database
    g.db.close()
    return response


# add methods (ex. POST) that root route should accept
@app.route('/', methods=['GET', 'POST'])
def index():
    # code to serve HTML using json data, not needed anymore, now that we are using database
    # with open('subs.json') as json_data:
    #     subs = json.load(json_data)
    #     return render_template('subs.html', subs=subs)

    # return 'Temporary - integrating models'

    # form variable to represent SubForm
    # [] WHY DO WE NEED PARENTHESES AFTER SUBFORM?
    form = SubForm()
    # handle POST request for new sub
    # check if form submission is valid
    # [] WHERE DOES .VALIDATE_ON_SUBMIT FUNCTION COME FROM?
    if form.validate_on_submit():
        # .create comes from peewee
        models.Sub.create(
            name=form.name.data.strip(),
            description=form.description.data.strip()
        )
        return redirect('/r')

    return render_template('new_sub.html', title='New Sub', form=form)


@app.route('/r')
@app.route('/r/')
# add methods (ex. POST) that root route should accept
@app.route('/r/<sub>', methods=['GET', 'POST'])
def r(sub=None):
    # code using JSON data before database created
    # with open('subs.json') as json_data:
    #     subs = json.load(json_data)
    if sub == None:
        # gets all subs from Sub and limits to 100 results
        # .select comes from peewee, like .find() in JS
        # [] HOW DOES "models.Sub" GET RESULTS FROM THE DATABASE?  ISN'T IT A MODEL TO CREATE AN ENTRY IN THE SUB TABLE?  WHY ISN'T IT "G.DB.SUB.SELECT"?
        subs = models.Sub.select().limit(100)
        return render_template('subs.html', subs=subs)
    else:
        sub_id = int(sub)
        # find the sub that matches sub_id
        # .get comes from peewee, like .findById in JS
        found_sub = models.Sub.get(models.Sub.id == sub_id)
        # .posts accesses the 'backref' set in PostModel.sub
        posts_data = found_sub.posts

        # handle POST request for new post
        # define the PostForm
        form = PostForm()
        if form.validate_on_submit():
            models.Post.create(
                user=form.user.data.strip(),
                title=form.title.data.strip(),
                text=form.text.data.strip(),
                sub=found_sub
            )
            flash('New post created')
            # redirect to the sub page where post was created
            return redirect('/r/{}'.format(sub_id))

        # code using JSON data before database created when the data file manually set id
        # return render_template('sub.html', sub=subs[sub_id - 1])
        # pass found_sub, posts_data, and PostForm to 'sub.html'
        return render_template('sub.html', sub=found_sub, posts=posts_data, form=form)


@app.route('/posts')
@app.route('/posts/')
@app.route('/posts/<id>', methods=['GET', 'POST'])
def posts(id=None):
    # code that used json data, not database
    # with open('posts.json') as json_data:
    #     posts = json.load(json_data)
    if id == None:
        found_posts = models.Post.select().limit(100)
        return render_template('posts.html', posts=found_posts)
    else:
        post_id = int(id)
        found_post = models.Post.get(models.Post.id == post_id)
        # .comments references the backref='comments' in CommentModel.post
        comments_data = found_post.comments

        # handle POST request for new comment
        comment_form = CommentForm()
        if comment_form.validate_on_submit():
            models.Comment.create(
                user=comment_form.user.data.strip(),
                text=comment_form.text.data.strip(),
                post=found_post
            )
            flash('New comment added')
            return redirect('/posts/{}'.format(post_id))
        # code that used json data, not database
        # return render_template('post.html', post=posts[post_id - 1])
        return render_template('post.html', post=found_post, form=comment_form, comments=comments_data)


if __name__ == '__main__':
    # before app runs, initialize connection to the database through models file's initialize function
    models.initialize()
    app.run(debug=DEBUG, port=PORT)
