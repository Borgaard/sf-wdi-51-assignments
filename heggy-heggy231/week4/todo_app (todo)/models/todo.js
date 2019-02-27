// this is schema
// import lib in there
const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const TodoSchema = new Schema({ // task theme
  // key value 
  task: String,
  description: String
});


// 'Todo' < collection name, TodoSchema < schema
// everything default private make it public by export
const Todo = mongoose.model('Todo', TodoSchema);
// make it public, module > above codes, it is node syntax
module.exports = Todo;
