// require express and other modules
const express = require("express");
app = express();
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
// const mongoose = require('mongoose');




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

  //TO BE COMPLETED LATER-check mongoose book app
  //   app.get("/api/todos/:id", (req, res) => {
  //     const todoId = parseInt(req.params.id);
  //     console.log(`todo Id is now ${todoId}`);

  //     const foundTodo = todos.filter(todo => {
  //       return todo._id == todoId;
  //     })[0];
  //     res.json(foundTodo);
  //   });


});

// Index:
//This endpoint responds with all of the todos
app.get("/api/todos", (req, res) => {
  const object = {
    data: todos
  };
  res.json(object);
});

// Create
/* This endpoint will add a todo to our "database"
 * and respond with the newly created todo.
 */
app.post("/api/todos", (req, res) => {
  const newTodo = req.body; //This takes in all form data
  //Next is to assign an incremental id for each new todo
  //Logic below: if todos array is not empty, the newTodo shd equal (id of last index + 1), 
  //otherwise, if todos array is empty, make newTodo have an id of 1
  if (todos.length > 0) {
    newTodo._id = todos[todos.length - 1]._id + 1;
  } else {
    newTodo._id = 1;
  }
  //Next is to add newTodo to existing array
  todos.push(newTodo);

  res.json(newTodo);
});

// Show: 
//This endpoint will return a single todo with the id specified in the route parameter (:id)
app.get("/api/todos/:id", (req, res) => {
  const todoId = parseInt(req.params.id);
  console.log(`todo Id is now ${todoId}`);

  const foundTodo = todos.filter(todo => {
    return todo._id == todoId;
  })[0];
  res.json(foundTodo);
});

// Update
app.put("/api/todos/:id", (req, res) => {
  /* This endpoint will update a single todo with the
   * id specified in the route parameter (:id) and respond
   * with the newly updated todo.
   */
  //First, get todo by id (from URL params) and put in variable.
  const todoId = parseInt(req.params.id);

  const todoToUpdate = todos.filter(todo => {
    return todo._id == todoId;
  })[0];
  //After getting todoToUpdate (filtered by id), update each object property or key(in our hard coded data, it's task and description):
  todoToUpdate.task = req.body.task;
  todoToUpdate.description = req.body.description;

  res.json(todoToUpdate);
});



// Destroy
app.delete("/api/todos/:id", (req, res) => {
  /* This endpoint will delete a single todo with the
   * id specified in the route parameter (:id) and respond
   * with success.
   */
  const todoId = parseInt(req.params.id);

  const todoToDelete = todos.filter(todo => {
    return todo._id == todoId;
  })[0];

  todos.splice(todos.indexOf(todoToDelete), 1);

  res.json(todoToDelete);
});

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});