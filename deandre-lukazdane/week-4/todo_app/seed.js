const db = require('./models');
const mongoose = require('mongoose');

const todo = {
    task: "learn mongoose",
    description: "going over lessons"
}

db.Todo.create(todo, (err, newTodo) => {
    if (err){
        return console.log(err);
    }
    console.log(`new todo ${newTodo}`);
});
