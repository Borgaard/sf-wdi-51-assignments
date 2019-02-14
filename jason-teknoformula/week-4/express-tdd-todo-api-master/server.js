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
  let query = req.body;
  
});

// Index
app.get('/api/todos', (req, res) => {
  //this endpoint responds with all of the todos
  res.json({data: todos});
});

// Index
app.get('/api/todos', (req, res) => {
  //this endpoint responds with all of the todos
  res.json({data: todos});
});

// Create
app.post('/api/todos', (req, res) => {
  /* This endpoint will add a todo to our "database"
   * and respond with the newly created todo.
   */
  //get new todo text from the request
  let newTodo = req.body;

  //conditional to set ._id of newTodo
  todos.length === 0 ? newTodo._id = 1 : newTodo._id = todos[todos.length - 1]._id + 1;

  //add newTodo to data array
  todos.push(newTodo);
  //return newTodo to the user
  res.json(newTodo);
});

// Show
app.get('/api/todos/:id', (req, res) => {
  /* This endpoint will return a single todo with the
   * id specified in the route parameter (:id)
   */

   //store the todo's id in a variable
   var todoId = parseInt(req.params.id);
  //using the .filter method to find the todo with matching id no.
   var foundTodo = todos.filter(function (todo) {
      return todo._id == todoId;
   })[0];
   //return the found todo
   res.json(foundTodo);
});

// Update
app.put('/api/todos/:id', (req, res) => {
  /* This endpoint will update a single todo with the
   * id specified in the route parameter (:id) and respond
   * with the newly updated todo.
   */
    //store the id of the todo
    let todoId = parseInt(req.params.id);
    //making a variable for the updated todo
    let updatedTodo = todos.filter( (todo) => {
      return todo._id == todoId;
    })[0];
    //updating the todo and its description
    updatedTodo.description = req.body.description;
    updatedTodo.task = req.body.task;
    //return the updated todo
    res.json(updatedTodo);
});

// Destroy
app.delete('/api/todos/:id', (req, res) => {
  /* This endpoint will delete a single todo with the
   * id specified in the route parameter (:id) and respond
   * with success.
   */
    // store ID of request
   let todoId = parseInt(req.params.id);

    //get todo with matching id 
   let todoToDelete = todos.filter( (todo) => {
     return todo._id === todoId;
   } )[0];

   //remove id from array using splice
   todos.splice(todos.indexOf(todoToDelete), 1);

   //return the deleted todo
   res.json(todoToDelete);
});

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
