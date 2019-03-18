# Import Flask class from flask libraray (!! flask library lower case, class name uppercase Flask)
from flask import Flask

# initialize an instance of the Flask class.
#  This starts the website!!!
app = Flask(__name__)

# The default URL ends in / ("my-website.com/").
#  Could be instead "my-website.com/about" or anything more++
@app.route('/')
#Function that returns the page: renders "Hello! Heggy!!"
def index():
  # return (takes string) determines what to render on the screen!
  return 'Hello! YOU!!!!!!'

# Run the app when the program starts!!
if __name__ == '__main__':
  app.run(debug=True) #show all the errors as devpmt env.