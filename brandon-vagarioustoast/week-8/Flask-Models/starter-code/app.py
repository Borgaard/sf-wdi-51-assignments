from flask import Flask, g
from flask import render_template, flash, redirect, url_for

# This import makes our connection to the models
import models
from forms import SubForm, PostForm


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
    # A Form Variable Representing the SubForm
    form = SubForm()

    # check if the form submission is valid
    if form.validate_on_submit():
        # if it is, create a new Sub and redirect the user
        models.Sub.create(
            name=form.name.data.strip(),
            description=form.description.data.strip())

        return redirect('/r')
        # if it isn't, send them back to the form
    return render_template("new_sub.html", form=form)


@app.route('/r')
@app.route('/r/<sub>', methods=['GET', 'POST'])
def r(sub=None):
    if sub == None:
        # get all subs
        subs = models.Sub.select().limit(100)
        # send the retrieved subs to our subs.html template
        return render_template("subs.html", subs=subs)
    else:
        # use the Sub ID to find the right Sub
        sub_id = int(sub)
        sub = models.Sub.get(models.Sub.id == sub_id)
        posts = sub.posts

        form = PostForm()
        if form.validate_on_submit():
            models.Post.create(
                user=form.user.data.strip(),
                title=form.title.data.strip(),
                text=form.text.data.strip(),
                sub=sub
            )

            return redirect(f'/r/{sub_id}')
        # send the found sub to the template
        return render_template('sub.html', sub=sub, form=form, posts=posts)


@app.route('/posts')
@app.route('/posts/<id>')
def posts(id=None):
    with open('posts.json') as json_data:
        posts = json.load(json_data)
        if id == None:
            return render_template('posts.html', posts=posts)
        else:
            post_id = int(id)
            return render_template('post.html', post=posts[post_id])


if __name__ == '__main__':
    models.initialize()
    app.run(debug=DEBUG, port=PORT)
