const mongoose = require('mongoose');
const Todo = require('./todo');
exports.Todo = Todo;

const TodoModel = require('./models/todo');
  module.exports = {
    Todo: TodoModel
  }

mongoose.connect('mongodb://localhost/todo-app', {useNewUrlParser: true});
