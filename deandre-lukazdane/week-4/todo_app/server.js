const db = require('./models');
const express = require('express');
const app = express();

app.get('/api/todo', (req, res) =>  {
    db.Todo.find({}, (err, allTodos) => {
        if(err) {
            return console.log(err);
        }
        res.json(allTodos)
    });
});
app.get('/api/todo/:id', (req, res) => {
    let todoId = req.params.id;
    db.Todo.findOne({_id: todoId}, (err, foundTodo) => {
        if(err) {
            return console.lof(err);
        }
        res.json(foundTodo);
        
    });
});

app.listen(3000);