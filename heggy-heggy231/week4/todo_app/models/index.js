// model folder gets the application structure and connection
// mongod gives you access to the mongooseDB activates mongoose db
// import a library
const mongoose = require('mongoose');
// models/index.js
// require runs the code from the given file and returns its exports
const Todo = require('./todo');


// connection db
mongoose.connect('mongodb://localhost/todo-app', { useNewUrlParser: true });
// useNewUrlParser: true just a set up so you don't get warning
// I am giving app name 

// end the end export Todo.js
exports.Todo = Todo;