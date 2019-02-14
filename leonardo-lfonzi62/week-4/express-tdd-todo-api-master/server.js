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
  console.log(req.body);
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
  // grabbing the search term item
  let searchTerm = req.query.q;
  // peeked at the solution code, 
  let filteredTodos = todos.filter((todo) => {
    // left side of the argument is looking for a task that is included in the query by the user
    // right side of the argument is doing the same for desciption 
  return(todo.task.toLowerCase().includes(searchTerm.toLowerCase())|| todo.description.toLowerCase().includes(searchTerm.toLowerCase()));
  });
  res.json({data : filteredTodos});
});

// Index
app.get('/api/todos', (req, res) => {
  /* This endpoint responds with all of the todos */
  res.json({data: todos});

});

// Create
app.post('/api/todos', (req, res) => {
  /* This endpoint will add a todo to our "database"
   * and respond with the newly created todo.*/
let task = req.body.task;
let desc = req.body.description;
// created new object of todos. cleaner solution would be to use req.body to grab the body and set to let newTodo = req.body
let newTodo = { task: task, 
  _id:"",
  description: desc };
  
  if (todos.length > 0) {
    newTodo._id = todos[todos.length - 1]._id + 1;
  } else {
    newTodo._id = 1;
  }
// pushing newTodo into the todos array
  todos.push(newTodo);


  res.json(newTodo);

}); 


// Show
app.get('/api/todos/:id', (req, res) => {
  /* This endpoint will return a single todo with the 
   * id specified in the route parameter (:id)  */
  var todoId = parseInt(req.params.id);
// filtering through the todos array and returning the todoId if it matches the id in the data 
  var foundTodo = todos.filter( (todo) => {
    return todo._id == todoId;
  })[0];

res.json(foundTodo);
});

// Update
app.put('/api/todos/:id', (req, res) => {
  /* This endpoint will update a single todo with the
   * id specified in the route parameter (:id) and respond
   * with the newly updated todo.
   */
  // grabbing the ID 
  let todoId = parseInt(req.params.id);
  // todo to update
  let todoToUpdate = todos.filter( (todo) => {
    return todo._id === todoId;
  })[0];

// update the todo's task
todoToUpdate.task = req.body.task;

// update the todo's description
todoToUpdate.description = req.body.description;

res.json(todoToUpdate);

});

// Destroy
app.delete('/api/todos/:id', (req, res) => {
  /* This endpoint will delete a single todo with the
   * id specified in the route parameter (:id) and respond
   * with success.
   */
  // get todo id from url params (`req.params`)
  let todoId = parseInt(req.params.id);

  // find todo to delete by its id using the filter method
  let todoToDelete = todos.filter((todo) => {
    return todo._id === todoId;
  })[0];

  // remove todo from todos array indexing at the found todo to delete 
  todos.splice(todos.indexOf(todoToDelete), 1);

  // send back deleted todo
  res.json(todoToDelete);
});

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
