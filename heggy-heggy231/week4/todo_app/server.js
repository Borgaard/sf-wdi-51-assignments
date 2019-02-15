// server.js
const db = require(`./models`); // grab the export object from models/index.js
  // now db.Todo stores the Todo model from the models/todo file
const express = require('express');
const app = express();

// get all todos
  // app.get(api, callback(req, res))
  // req I receive from client, res send back to client
app.get('/api/todo', (req, res) => {
  // find all todos in db. db is connection, Todo is model name, .find() method mongoose give your access. .find(obj, cb function err, allTodos), if all is well I will get it in my allTodos obj.  Todo is model which is 
  db.Todo.find({}, (err, allTodos) => {

    // if there is err imme return error
    if(err) { return console.log(err) }
    // how to send my data to my client? res.json(all data)
    res.json(allTodos);
  });
})

// get one todo, :id is the 
app.get('/api/todo/:id', (req, res) => {
  // get todo id from url params (`req.params`)
  // uuid is string so we don't use parseInt
  let todoId = req.params.id;

  // find todo in db by id
  // you can check by visiting: 
  // http://localhost:2000/api/todo/5c635c53d99f7a773670c946
  db.Todo.findOne({ _id: todoId }, (err, foundTodo) => {
    if(err) { 
      return console.log(err) 
    }
    res.json(foundTodo);
  });
});
// open local 2000/api/todo


// open the port 3000 to listen
app.listen(2000);