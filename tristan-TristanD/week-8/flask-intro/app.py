#Importing Flask class from the flask library
from flask import Flask , render_template

# Initialize an instance of the Flask class.
# This starts the website!
app = Flask(__name__)

#setting up a route decorator
@app.route('/')

# Function that returns the page: Display "Hello, World!"
def index():
    skills= ["java", "react", "python"]
    return render_template("index.html", greeting="Hello World!", skills=skills) 


app.route('/sayhi/<username>')
def hello(username):
    return 'hello {}'.format(username)

# Run the app when the program starts!
if __name__ == '__main__':
    app.run(debug=True)