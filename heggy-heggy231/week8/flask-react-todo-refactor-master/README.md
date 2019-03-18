# Flask-React Todo


## Learning Objectives
- Build a backend in Flask retrofitting the routes used in React todo app with full CRUD.
- Checkout the `react-front-end` given in this repo to get the React frontend or you can even use your own code. Don't be afraid to get creative. 
- Objective is to build the backend API in Flask for this React app. (AKA your own TODO api!)
    - Model should include 
        - body: String,
        - priority: Number,
        - completed: Boolean
    - Feeling creative? Why not CRUD some pokemon? Pick a crudable resource and get to practicing! 
- You will have to update the routes in the React app to point to APIs created in Flask backend.

Models => Todo.js

```diff
import axios from 'axios'

-const url = `https://super-crud-api.herokuapp.com/api/todos`
+const url = `YOUR LOCAL HOST`

class TodoModel {
  static all = () =>{
    let request = axios.get(`${url}`)
    return request
  }
```


## Steps on how to refactor heroku backend to Flask backend:
   https://git.generalassemb.ly/sf-wdi-51/Flask-Models/edit/master/README.md
Here are some guidelines to follow as you build out the Comments for this project:
1. Define a model and connect it to the Post model
2. Add a comment form to the other form classes
3. Add a reference to your new form to the appropriate function in `app.py`. Comments should be attached to posts so think about where this form reference should be.
4. When a user goes to an individual Post page, list out the comments