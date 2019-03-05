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
// this is our homepage on the root route
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

  //they send you search term, you have to look through array and send it back
  let searchTerm = req.query.q;

  db.Todo.find().or()(
    [{ 
      "task": {"$regex": searchTerm}}
    ])
    .exec((err, searchTodos) => { "description", ("#reg")
    if(err) return console.log(err);
    res.json({'data': searchedTodos});
    })
 
     ////////////////////
    ///solution code ///
    ////////////////////
    // let searchTerm = req.query.q;
    // console.log(searchTerm);
    // let filteredTodos = todos.filter((todo) => {
    //   return(todo.task.toLowerCase().includes(searchTerm.toLowerCase()) || todo.description.toLowerCase().includes(searchTerm.toLowerCase()));
    // });
    // res.json({data : filteredTodos});
    // });
  
    // // get all todos
    // app.get('/api/todos', (req, res) => {
    // // send all todos as JSON response
    // res.json({ data: todos });
});

// Index
app.get('/api/todos', (req, res) => {
  /* This endpoint responds with all of the todos
   */
  // res.send("Hello, world"); unlocks res 200
  // the JSON object should have one key-value pair. The key should be called "data". The value should be the hardcoded array of todos
                    // value that we want to pass
  // res.json({ todos: todos});
  res.json({ data: todos});
});

// Create
app.post('/api/todos', (req, res) => {
  res.send("Hello, world");
  // var newTodo = new Todo(req.body);
  // // console.log(`create body: ${req.body}`);
  // /* This endpoint will add a todo to our "database"
  //  * and respond with the newly created todo.
  // //  */
  let newTodo = new req.body({
    if (err) { throw err},
    _id: 28,
    // newTodo =_id++
  });
 // create new todo with form data (`req.body`)
  // let newTodo = req.body;
  // newTodo._id = todos[todos.length-1];

  // for (i = 0; i < newTodo._id; i++) {
  //   newTodo._id = _id++;
  // }

   ////////////////////
  ///solution code ///
  ////////////////////
  // set sequential id (last id in `todos` array + 1)
  // if (todos.length > 0) {
  //   newTodo._id = todos[todos.length - 1]._id + 1;
  // } else {
  //   newTodo._id = 1;
  // }

  // add newTodo to `todos` array
  todos.push(newTodo);

  // send newTodo as JSON response
  res.json(newTodo);

});

// Show
app.get('/api/todos/:id', (req, res) => {
  /* This endpoint will return a single todo with the
   * id specified in the route parameter (:id)
   */
    res.send("Hello, world");
    for (var i = 0; i < todos[i].length; i++) {
      if (todos[i]._id === req.params.id) {
        res.json({ "data": todos[i] });
      }
      console.log('error');
    }

  // we pann an object to res.json and we are saving our todos as a value to key todos.
  // this could be res.json res.json({ pizza: todos})
  // each object has Id paramter inside that is going to be our matching statement
  // res.json({ todos: todos});
  // res.json({ "data": todos [id] });


  ////////////////////
  ///solution code ///
  ////////////////////

  // we can use id to map to id above
  // let todoId = req.params.id;
  // var todoId = parseInt(req.params.id);
  // console.log(todoId);
  // var foundTodo = todos.filter(function (todo) {
  //     return todo._id === todoId;
  //     })[0];

  //   res.json(foundTodo);

    
});

// Update
app.put('/api/todos/:id', (req, res) => {
  /* This endpoint will update a single todo with the
   * id specified in the route parameter (:id) and respond
   * with the newly updated todo.
   */
  res.send("Hello, world");
  Todo.findOneAndUpdate({ _id: id }, req.body, (err, updatedTodo) => {
    console.log(updatedTodo);
    res.json(updatedTodo);
  });

    // get todo ID from url params
    var todoId = req.params.id;
    var updateTodoTask = req.body.task;
    var updateTodoDesc = req.body.description;

  ////////////////////
  ///solution code ///
  ////////////////////

    // // get todo id from url params (`req.params`)
    // let todoId = parseInt(req.params.id);

    // // find todo to update by its id
    // let todoToUpdate = todos.filter( (todo) => {
    //   return todo._id === todoId;
    // })[0];
  
    // // update the todo's task
    // todoToUpdate.task = req.body.task;
  
    // // update the todo's description
    // todoToUpdate.description = req.body.description;
  
    // res.json(todoToUpdate);
});

// Destroy
app.delete('/api/todos/:id', (req, res) => {
  res.send("Hello, world");
  /* This endpoint will delete a single todo with the
   * id specified in the route parameter (:id) and respond
   * with success.
   */

    let deleteTodo = todos.find((todo, id) => {
      return (todo._id === parseInt(req.params.id)); //params are strings
    });
    let todoDelete = books[deleteTodo];
    books.splice(deleteTodo, 1);
    res.json(todoDelete);

  ////////////////////
  ///solution code ///
  ////////////////////
  // get todo id from url params (`req.params`)
  // let todoId = parseInt(req.params.id);

  // // find todo to delete by its id
  // let todoToDelete = todos.filter( (todo) => {
  //   return todo._id === todoId;
  // })[0];

  // // remove todo from `todos` array
  // todos.splice(todos.indexOf(todoToDelete), 1);

  // // send back deleted todo
  // res.json(todoToDelete);


});

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
