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

//app.all('*', auth.requireUser); <- was part of documentation i was reading to try to fix the "before all" hook error


// Search
app.get('/api/todos/search', (req, res) => {

  db.Todo.find().or([
    {"task": {"$regex":searchTerm}}, {"description": {"$regex"}}
  ])
  .exec((err,searchTodos) => {
    if(err) return console.log(err);
    res.json({data : todos});
  })
  /* This endpoint responds with the search results from the
   * query in the request. COMPLETE THIS ENDPOINT LAST.
   */
  // let todoQuery = req.query.q;
  // console.log(todoQuery);
  // let filteredTodos = todos.filter((todo) => {
  // //(default all searc query to lower, dalton says this prevents conflicts) - https://stackoverflow.com/questions/46770621/%C4%B0-tolowercase-i
  //   return(todo.task.toLowerCase().includes(todoQuery.toLowerCase()) || todo.description.toLowerCase().includes(todoQuery.toLowerCase()));
  // });
  // res.json({data : filteredTodos});
});

app.get('/api/todos', (req, res) => {
res.json({ data: todos });
});

// Index
app.get('/api/todos', (req, res) => {
  /* This endpoint responds with all of the todos
   */
//let todos = [];
   res.json({ data: todos});

});

// Create
app.post('/api/todos', (req, res) => {
  /* This endpoint will add a todo to our "database"
   * and respond with the newly created todo.
   */
//----------------------------------------------------------------------------

  let newTodo = req.body;
 (todos.length > 0) ?
    newTodo._id = todos[todos.length - 1]._id + 1 :
    newTodo._id = 1;
  
//----------------------------------------------------------------------------

  todos.push(newTodo);
  res.json(newTodo);
});
// Show
app.get('/api/todos/:id', (req, res) => {
 /* This endpoint will return a single todo with the
   * id specified in the route parameter (:id)
   */
//this part should search object  by ID -note to self: when encountering error that console doesn't help or doesn't look out of place, isolate and check over syntax; personal common misplaced or forgotten (',' '((' 'that is to say, multiple parentheticals '.' './'))
   
  let todoId = parseInt(req.params.id);
  let foundTodo = todos.filter( (todo) => {
   return todo._id == todoId;
   })[0];
  //foundTodo._id = req.body._id;
  //foundTodo.description = req.body.description;
  res.json(foundTodo);
});
// Note to self - after step 5 all remaining sections throw "before all" hook error, which seems to just go away if i just ignore it and follow directions for test
//looked in test file for next steps as the hook error did not actually give a hint to next part

// Update
app.put('/api/todos/:id', (req, res) => {
  /* This endpoint will update a single todo with the
   * id specified in the route parameter (:id) and respond
   * with the newly updated todo.
   */
  let todoId = parseInt(req.params.id);
// same as previous, search for id
  let todoToUpdate = todos.filter( (todo) => {
    return todo._id == todoId;
  })[0];

  todoToUpdate.task = req.body.task;
  todoToUpdate.description = req.body.description;

  res.json(todoToUpdate);
});



// Destroy
app.delete('/api/todos/:id', (req, res) => {
  /* This endpoint will delete a single todo with the
   * id specified in the route parameter (:id) and respond
   * with success.
   */
// this section VVV keeps repeating, i wondeer if i can make this global
  let todoId = parseInt(req.params.id);
  let todoToDelete = todos.filter( (todo) => {
    return todo._id === todoId;
  })[0];

// array.splce removes an item from an array and returns the removed item
  todos.splice(todos.indexOf(todoToDelete), 1);
  res.json(todoToDelete);
});

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
