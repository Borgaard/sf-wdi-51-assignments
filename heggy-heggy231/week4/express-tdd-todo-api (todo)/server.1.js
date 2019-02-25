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
  let 
  res.send("Hello, world");
});

// Index test1
app.get('/api/todos', (req, res) => {
  /* This endpoint responds with all of the todos
   */
  // res.send("Hello, world")
  //should respond with a javascript object translated into JSON format

  // res.json({ todos: todos }); // 2) the JSON object should have one key-value pair. The key should be called "data". The value should be the hardcoded array of todos
  // 1) the JSON object should have one key-value pair. The key should be called "data". The value should be the hardcoded array of todos
  res.json({ "data": todos });
  // console(req.params._id);
});

// Create
app.post('/api/todos', (req, res) => {
  /* This endpoint will add a todo to our "database"
   * and respond with the newly created todo.
   */
  // res.send("Hello World");
  // Where does the data for the new todo live?
  var newTodo = req.body;
  newTodo._id = 19;
  todos.push(newTodo);
  res.json(newTodo);
});

// Show
// http://localhost:3000/api/todos/7 put the id in there
app.get('/api/todos/:id', (req, res) => {
  /* This endpoint will return a single todo with the
   * id specified in the route parameter (:id)
   */
  // res.send("Hello world");
  // GET /api/todos/:id (show)
      // 1) "before all" hook
  // res.json({ "data" : todos }); // pass todos array with key of data
  // res.json({"data" : todos})
  var todoId = parseInt(req.params.id);
  console.log(todoId);
  console.log('is this number?', typeof(todoId));
  // console.log(todoId[0]);
  // this function founTodo is fetching the id to my /api/todos/:id

  var foundTodo = todos.filter(function (todo) {
    console.log('Todo._id:', todo._id);
    return todo._id == todoId;
  })[0]; // filter item that matches on return stmt.
  // returning the id number
  res.json(foundTodo);

  // What are you going to send back to the client?

  console.log('todoID: ',todoId);
  console.log('FoundToDo: ',foundTodo);

});

// Update
app.put('/api/todos/:id', (req, res) => {
  /* This endpoint will update a single todo with the
   * id specified in the route parameter (:id) and respond
   * with the newly updated todo.
   */
});

// Destroy
app.delete('/api/todos/:id', (req, res) => {
  /* This endpoint will delete a single todo with the
   * id specified in the route parameter (:id) and respond
   * with success.
   */
});

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
