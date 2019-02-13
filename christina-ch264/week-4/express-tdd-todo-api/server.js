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

   //they send you search term, you have to look through array and send it back

   let searchTerm = req.query.q;

   db.Todo.find().or()([
  { "task": {"$regex": searchTerm}}])
   .exec((err, searchTodos) => { "description": {"#reg"}
    if(err) return consosle.log(err);
    res.json({'data': searchedTodos});
   })
});

// Index
app.get('/api/todos', (req, res) => {
  /* This endpoint responds with all of the todos
   */
   // res.send("Hello, world");
   // the JSON object should have one key-value pair. The key should be called "data". The value should be the hardcoded array of todos
                     // value that we want to pass
   // res.json({ todos: todos});
   res.json({ "data": todos});
});

// Create
app.post('/api/todos', (req, res) => {
  console.log(`create body: ${req.body}`);
  /* This endpoint will add a todo to our "database"
   * and respond with the newly created todo.
   */
   // res.send("hello world");
   // respond with json
   res.json({todos: todos})

   let newTodo = new req.body({
    _id: 454,
    _id++,
   });

});

// Show
app.get('/api/todos/:id', (req, res) => {
  /* This endpoint will return a single todo with the
   * id specified in the route parameter (:id)
   */

   // we pann an object to res.json and we are saving our todos as a value to key todos.
   // this could be res.json res.json({ pizza: todos})
   // res.json({ todos: todos});

   // res.json({ "data": todos [id] });

   // we can use id to map to id above
   // let todoId = req.params.id;
   var todoId = parseInt(req.params.id);
   console.log(todoId);
   var foundTodo = todos.filter(function (todo) {
       return todo._id === todoId;
       })[0];

     res.json(foundTodo);

    // res.json({ todo: todo })
    // each object has Id paramter inside that is going to be our matching statement

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
