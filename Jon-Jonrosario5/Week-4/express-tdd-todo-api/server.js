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
   // setting the query params to require a q as the variable that stores the query.
   let searchTerm = req.query.q;
   // Console logging the value of the query
   console.log(searchTerm);
   // Filtering through the todos array to find a match for the query that was passed into the url
   let filteredTodos = todos.filter((todo) => {
    // this will search all tasks & descriptions in todo and make the value lowercase. and then also makes the searchTerm lower case before seeing if that value is included in any of the property values.
   return(todo.task.toLowerCase().includes(searchTerm.toLowerCase()) || todo.description.toLowerCase().includes(searchTerm.toLowerCase()));
 });
   // taking the data from the todos array, it is wrapped in json which is why we need the {} and data: before requesting the result of filteredTodo.
 res.json({data : filteredTodos});
});

// Index
app.get('/api/todos', (req, res) => {
  /* This endpoint responds with all of the todos
   */
   res.json({data : todos});
});

// Create
app.post('/api/todos', (req, res) => {
  /* This endpoint will add a todo to our "database"
   * and respond with the newly created todo.
   */

   // We are taking the info from the user (req.body) and storing it in a variable
   var newTodo = req.body;
      // We are checking to see if the array is empty. If empty the id of the new item will be 1.
      if (todos.length > 0) {
        // if the array has items, the newTodo._Id  will equal the length of the todos - 1 to compensate for the last item in the array.
        // the ._id will be taken and we will add one to ensure we are creating a unique id which is not referenced in the array.
        newTodo._id = todos[todos.length - 1]._id + 1;
      } else {
        newTodo._id = 1;
      }
      console.log(newTodo);
      todos.push(newTodo);
      res.json(newTodo);
});

// Show
app.get('/api/todos/:id', (req, res) => {
  /* This endpoint will return a single todo with the
   * id specified in the route parameter (:id)
   */

  var todoId = parseInt(req.params.id);

       var foundTodo = todos.filter(function (todo) {
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
   // taking the params request id and parsed it into an int and saved it into a variable
   // called todoID
   var todoId = parseInt(req.params.id);
   // Saved the items that were updated in the form and saved it in todoToUpdate
   var todoToUpdate;
   // looped through the todos array to find the todo id that matched the params id
   for (i = 0;i < todos.length; i ++){
    // When the matching id is found it will run the following code block.
      if(todoId === todos[i]._id){
        todoToUpdate = todos[i];
        // it is take todoToUpdate and add the task response to task.
        todoToUpdate.task = req.body.task;
        // It will take the todoToUpdate and add the description to description key.
        todoToUpdate.description = req.body.description;
        // sends the new key values to the json object.
        res.json(todoToUpdate);
        // console.logs the updated object.
        console.log(todoToUpdate);
      };
    };

});


// Destroy
app.delete('/api/todos/:id', (req, res) => {
  /* This endpoint will delete a single todo with the
   * id specified in the route parameter (:id) and respond
   * with success.
   */
    var deleteTodoId = parseInt(req.params.id);
    console.log(deleteTodoId);
    for (i = 0;i < todos.length; i ++){
      if(deleteTodoId === todos[i]._id){
        console.log(todos[i]);
        res.json(todos.splice(i,1));
        console.log("deleted");
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
