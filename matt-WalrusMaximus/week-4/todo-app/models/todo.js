const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const TodoSchema = new Schema({
    task: String,
    description: String
});

const Todo = mongoose.model('Todo', TodoSchema);

module.exports = Todo;