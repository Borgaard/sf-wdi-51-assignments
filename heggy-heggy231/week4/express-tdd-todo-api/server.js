// require express and other modules
let express = require('express'),
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
 */

app.get('/api/todos/search', (req, res) => {
  let searchTerm = req.query.q;
  console.log(searchTerm);
  let filteredTodos = todos.filter((todo) => {
    return(todo.task.toLowerCase().includes(searchTerm.toLowerCase()) || todo.description.toLowerCase().includes(searchTerm.toLowerCase()));
  });
  res.json({data : filteredTodos});
});

// get all todos
app.get('/api/todos', (req, res) => {
  // send all todos as JSON response
  res.json({ data: todos });
});

// create new todo
app.post('/api/todos', (req, res) => {
  // create new todo with form data (`req.body`)
  let newTodo = req.body;

  // set sequential id (last id in `todos` array + 1)
  if (todos.length > 0) {
    newTodo._id = todos[todos.length - 1]._id + 1;
  } else {
    newTodo._id = 1;
  }

  // add newTodo to `todos` array
  todos.push(newTodo);

  // send newTodo as JSON response
  res.json(newTodo);
});

// get one todo
app.get('/api/todos/:id', (req, res) => {
  // get todo id from url params (`req.params`)
  let todoId = parseInt(req.params.id);

  // find todo to by its id
  let foundTodo = todos.filter( (todo) => {
    return todo._id == todoId;
  })[0];

  // send foundTodo as JSON response
  res.json(foundTodo);
});

// update todo
app.put('/api/todos/:id', (req, res) => {
  // get todo id from url params (`req.params`)
  let todoId = parseInt(req.params.id);

  // find todo to update by its id
  let todoToUpdate = todos.filter( (todo) => {
    return todo._id === todoId;
  })[0];

  // update the todo's task
  todoToUpdate.task = req.body.task;

  // update the todo's description
  todoToUpdate.description = req.body.description;

  res.json(todoToUpdate);
});

// delete todo
app.delete('/api/todos/:id', (req, res) => {
  // get todo id from url params (`req.params`)
  let todoId = parseInt(req.params.id);

  // find todo to delete by its id
  let todoToDelete = todos.filter( (todo) => {
    return todo._id === todoId;
  })[0];

  // remove todo from `todos` array
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
