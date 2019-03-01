// require express and other modules
const express = require('express'),
    app = express(),
    bodyParser = require('body-parser');

// configure bodyParser (for receiving form data)
app.use(bodyParser.urlencoded({ extended: true }));

// serve static files from public folder
app.use(express.static(__dirname + '/public'));

/************
 * DATABASE *
 ************/

// our database is an array for now with some hardcoded values
let todos = [
  { _id: 7, task: 'Laundry', description: 'Wash clothes' },
  { _id: 27, task: 'Grocery Shopping', description: 'Buy dinner for this week' },
  { _id: 44, task: 'Homework', description: 'Make this app super awesome!' }
];

/**********
 * ROUTES *
 **********/

/*
 * HTML Endpoints
 */

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 *
 * The comments below give you an idea of the expected functionality
 * that you need to build. These are basic descriptions, for more
 * specifications, see the todosTest.js file and the outputs of running
 * the tests to see the exact details. BUILD THE FUNCTIONALITY IN THE
 * ORDER THAT THE TESTS DICTATE.
 */

// Search
app.get('/api/todos/search', (req, res) => {
  /* This endpoint responds with the search results from the
   * query in the request. COMPLETE THIS ENDPOINT LAST.
   */
  // res.send("hi")
  let found = []
  // console.log(req.query);
  todos.forEach((todo) =>{
    console.log(todo.task.indexOf(req.query.q));
    if(todo.task.indexOf(req.query.q) >= 0) {
      console.log(todo)
      found.push(todo)
    }
  })
  res.json({data: found});
});

// Index
app.get('/api/todos', (req, res) => {
  /* This endpoint responds with all of the todos*/
  // res.send("Hello world");
  res.json({"data": todos});
});

// Create
app.post('/api/todos', (req, res) => {
  /* This endpoint will add a todo to our "database" * and respond with the newly created todo.*/
var newTodo = req.body;
if (todos.length > 0) {
  newTodo._id = todos[todos.length - 1]._id + 1;
} else {
  newTodo._id = 1;
}

  todos.push(newTodo);

  res.json(newTodo);

});

// Show
app.get('/api/todos/:id', (req, res) => {
  /* This endpoint will return a single todo with the * id specified in the route parameter (:id)*/
  let todoId = parseInt(req.params.id);

  let foundTodo = todos.filter( function(todo) {
    return todo._id === todoId;
  })[0];
  res.json(foundTodo)
});

// Update
app.put('/api/todos/:id', (req, res) => {
  /* This endpoint will update a single todo with the
   * id specified in the route parameter (:id) and respond
   * with the newly updated todo.
   */
  let task = req.body.task;
  let desc = req.body.description;
  let todoId = parseInt(req.params.id);

  let foundTodo = todos.filter( function(todo) {
    return todo._id === todoId;
  })[0];
  foundTodo.task = task;
  foundTodo.description = desc;
  res.json(foundTodo)
});

// Destroy
app.delete('/api/todos/:id', (req, res) => {
  /* This endpoint will delete a single todo with the* id specified in the route parameter (:id) and respond* with success. */
  res.send("hi")
  let todoId = parseInt(req.params.id);

  todos.forEach(function(obj) {
    if (obj._id === todoId) {
      var index = todos.indexOf(obj);
      todos.splice(index, 1);
    } else {
      console.log("uh oh")
    }
  })
});

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
