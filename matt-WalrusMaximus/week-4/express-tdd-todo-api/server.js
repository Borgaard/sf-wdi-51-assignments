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
  // create variable for the q="" in browser
  let searchTerm = req.query.q;
  // log the q from query
  console.log(searchTerm);
  // creates variable that filters through the todo array
  let filteredTodos = todos.filter((todo) => {
    // create an or statement that searched through the object converting the query to lowercase and comparing it against the task key, if it finds nothing, search through description
    return(todo.task.toLowerCase().includes(searchTerm.toLowerCase()) || todo.description.toLowerCase().includes(searchTerm.toLowerCase()));
  });
  // converts the result into a new object with a key of data and the value of our variable
  res.json({data : filteredTodos});
});

// Index
app.get('/api/todos', (req, res) => {
  res.json({ "data": todos });
});

// Create
app.post('/api/todos', (req, res) => {
  // req.body is the todo object 
  // Give the todo a unique id
    // req.body._id = ##
    // let todo = req.body;
  // save the todo to our dB
    let newTodo = req.body;
  
    // conditional to check if the array is empty, if it is, assign new body object 1
    // otherwise grab the value from the last item and increment it by 1
    if (todos.length > 0) {
      newTodo._id = todos[todos.length - 1]._id + 1;
    } else {
      newTodo._id = 1;
    }
    // console log the new req body with the ID added
    console.log(req.body);
  
    // add newTodo to `todos` array
    todos.push(newTodo);
  
    // send the single todo back
    // send newTodo as JSON response
    res.json(newTodo);
  });


// Show
app.get('/api/todos/:id', (req, res) => {
  let todoId = parseInt(req.params.id);
  let foundTodo = todos.filter((todo) => {
    return todo._id == todoId;
  })[0];
  res.json(foundTodo);
});

// Update

// pulling the object per the ID of the element clicked
app.put('/api/todos/:id', (req, res) => {
  
  // stores the id value of the pulled object as a variable
  var updateTodo = parseInt(req.params.id);
  // open an empty object to later store the replacement text
  var newEntry = {};
  // iterate through the stored array for objects
  for (i=0;i<todos.length;i++) {
    // trying to match the value of the target with the value of db array
    if (updateTodo === todos[i]._id){
      // logs the state if the todo item in the array
      console.log(todos[i])
      // assigned the object inside the target array index to the pre-assigned variable
      newEntry = todos[i]
    }
  }
  // updates the task value with the new data
  newEntry.task = req.body.task
  // updates the description value with the new data
  newEntry.description = req.body.description
  // responds with the new object key/value pairs
  res.json(newEntry);
});

// Destroy
app.delete('/api/todos/:id', (req, res) => {

  var deleteTodo = parseInt(req.params.id);
  console.log(deleteTodo);
  for (i=0;i<todos.length;i++) {
    if (deleteTodo === todos[i]._id){
      console.log(todos[i])
      res.json(todos.splice(i,1));
      console.log(`Deleted object above`);
    }
  }
});

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
