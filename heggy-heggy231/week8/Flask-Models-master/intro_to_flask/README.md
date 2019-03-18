# Intro to Flask: https://git.generalassemb.ly/sf-wdi-51/intro_to_flask/edit/master/README.md

### Learning Objectives:
*After this lesson, you will be able to:*

- Write a basic Flask application.

Code to start off!!
- `$ mkdir flask-intro && cd flask-intro`

```
$ pip3 install virtualenv
$ virtualenv .env -p python3
$ source .env/bin/activate // activate your .env virtualenv

> python3 app.py  // run the app
In your browser go to `http://localhost:5000/`

- ADDED .gitignore from https://github.com/kennethreitz/flask-common/blob/master/.gitignore

## Discussion: Commonalities


What do you think these websites have in common?

- [Pinterest](http://www.pinterest.com)
- [Instagram](http://www.instagram.com)
- [LinkedIn](http://linkedin.com/)

They're each:

- High on user interactivity.
- Handling a large server load.

What else?

## They All Use **Flask**

![](https://qph.fs.quoracdn.net/main-qimg-cd83cf9ee7ad51b8af4d0c4d5220f534.webp)

Some quick notes about Flask:

- It's a Python micro web framework.
- It can create and write the entire back-end in Python!
- It can do small tasks (e.g., create a microblog or spin up a simple API).
- It can do complex tasks (e.g., Pinterest's API or create a Twitter clone).


<aside class="notes">

## Virtualenv

Let's also build a virtual environment. Virtual environments allow us to have multiple versions of Python on the same system so we can have different versions of both Python and the packages we are using on our computers.

- `$ mkdir flask-intro && cd flask-intro`

```
$ pip3 install virtualenv
$ virtualenv .env -p python3
$ source .env/bin/activate
```

## dependencies

We'll run the Flask app like any other app.

- We need to install Flask!
 Let's also install some dependencies and save them. Django doesn't utilize a `package.json`. Instead, we just use a text file that lists all of our dependencies. Pip freeze saves the dependencies in our `virtualenv` to that file. 

```bash
$ pip3 install flask
$ pip3 freeze > requirements.txt
```

If you are downloading and running a Python project, you can usually install its dependencies with `pip3 install -r requirements.txt`.


## Flask Syntax

How?

We just make a normal Python app.

It looks like:

```python
# Import Flask class from flask library. (Note the upper/lowercase convention.)
from flask import Flask

# Initialize an instance of the Flask class.
# This starts the website!
app = Flask(__name__)

# The default URL ends in / ("my-website.com/").
# Could be instead "my-website.com/about" or anything - more on this later.
@app.route('/')

# Function that returns the page: Display "Hello, World!"
def index():
  return 'Hello, World!'

# Run the app when the program starts!
if __name__ == '__main__':
    app.run(debug=True)

```


Run the app like normal:

`python app.py`

Go to:

`http://localhost:5000/`

You made a web app!

Let's change the string:

```python
def index():
  # The "return" determines what's displayed.
  return 'Hello, World!'
```


It's just Python — we can write any code.

- But `return` essentially just takes strings.

```python
def index():
  my_list = ["Hey", "check", "this", "out"]
  return my_list[0] # Works!
```

Conversely:

```python
def index():
  my_list = ["Hey", "check", "this", "out"]
  return my_list # WON'T WORK
```


### variables

```python
@app.route('/sayhi/<username>') # When someone goes here...
def hello(username): # Do this.
    return "Hello {}".format(username)
```


### Templates

## Jinja2

- One of the most widely used template engines for Python.
- Used in places that you might have visited already, like Instagram or NPR.

---

## Why Jinja2?

<aside class="notes">

**Talking Points:**

- Jinja2 is kind of like the engine that powers our vehicle (Flask). However, this happens behind the scenes.
- We're quickly peering behind the scenes to get an idea of what our engine can do.

- Some examples of what makes Jinja2 awesome are:
  - **Template inheritance:** You can extend templates in very efficient ways.
  - **HTML escaping:** Malicious hackers can create XSS attacks by injecting HTML code into our site where other users insert data. Jinja2 helps us avoid that.
  - **Speed and efficiency:** Jinja2 is very fast. It compiles optimized Python code.
  - **Flexibility and extensibility:** It's really easy to add our own filters and functions.
</aside>




### Making templates

```mkdir templates```
```touch templates/index.html```

- In Jinja, **templates** are rendered with double curly brackets (`{{ }}`).

- **Statements** are rendered with curly brackets and percent signs (`{% %}`).

  - A use case here is passing in logic like:
	```python
	{% if name == 'kevin' %}
	# Do the thing
	{% else %}
	# Do all the other things.
	```

---

- inside of app

```python
from flask import Flask, render_template

@app.route('/')
def home():
  return render_template("index.html", greeting="Hello World!")
```


- template 

## Template Solution

```html
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>Shakespeare</title>
</head>
<body>
    <p>{{greeting}}</p>
</body>
</html>
```

## Layout

1.  create a `layout.html`

```python
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title></title>
</head>
<body>
    
    {% block content %}{% endblock %}
</body>
</html>


```

- ```{% block content %}{% endblock %}``` this is where the template will be injected into the layout

- inside of another template

```python
{% extends "layout.html" %}


{% block content %}

<h1>Hello Fred</h1>


{% endblock %}

```

## Additional Reading

- [Flask Documentation](http://flask.pocoo.org/docs/0.11/)
- [A Flask Tutorial to Follow Along With](https://github.com/miguelgrinberg/flask-pycon2014)
- [The Flask Mega-Tutorial](http://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-ii-templates)
- [A Great Guide to Those Weird "Decorators"](http://simeonfranklin.com/blog/2012/jul/1/python-decorators-in-12-steps/)
