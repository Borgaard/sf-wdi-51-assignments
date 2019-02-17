// require express and other modules
const express = require("express"),
  app = express(),
  bodyParser = require("body-parser");

// configure bodyParser (for receiving form data)
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

// serve static files from public folder
app.use(express.static(__dirname + "/public"));

/************
 * DATABASE *
 ************/

// our database is an array for now with some hardcoded values
let todos = [{
    _id: 7,
    task: "Laundry",
    description: "Wash clothes"
  },
  {
    _id: 27,
    task: "Grocery Shopping",
    description: "Buy dinner for this week"
  },
  {
    _id: 44,
    task: "Homework",
    description: "Make this app super awesome!"
  }
];

/**********
 * ROUTES *
 **********/

/*
 * HTML Endpoints
 */

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
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
app.get("/api/todos/search", (req, res) => {
  /* This endpoint responds with the search results from the
   * query in the request. COMPLETE THIS ENDPOINT LAST.
   */
});

// Index
app.get("/api/todos", (req, res) => {
  /* This endpoint responds with all of the todos
   */
  const object = {
    data: todos
  };
  res.json(object);
});

// Create
app.post("/api/todos", (req, res) => {
  /* This endpoint will add a todo to our "database"
   * and respond with the newly created todo.
   */
  todos.push(req.body);
  res.json();    
  });


// Show
app.get("/api/todos/:id", (req, res) => {
  /* This endpoint will return a single todo with the
   * id specified in the route parameter (:id)
   */

  const todoId = req.params.id;
  console.log("todo Id is now" + todoId);

  const foundTodo = todos.find(todo => {

    return todoId == todo._id;
  })
  res.json(foundTodo);
});

// Update
app.put("/api/todos/:id", (req, res) => {
  /* This endpoint will update a single todo with the
   * id specified in the route parameter (:id) and respond
   * with the newly updated todo.
   */
});

// Destroy
app.delete("/api/todos/:id", (req, res) => {
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
  console.log("Server running on http://localhost:3000");
});