const mongoose = require('mongoose');
const Todo = require('./todo');

  mongoose.connect('mongodb://localhost/todo-app', { useNewUrlParser: true } );

  exports.Todo = Todo;