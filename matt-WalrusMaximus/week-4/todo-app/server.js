const db = require('./models');
const express = require('express');
const app = express();

app.get('/api/todo', (req,res) => {
   db.Todo.find({}, (err, allTodos) => {
       if(err){
           return console.log(err);
       }
       res.json(allTodos);
   });
});

app.listen(3000);