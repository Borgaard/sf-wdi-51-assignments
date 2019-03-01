// server.js
const db = require(`./models`); // grab the export object from models/index.js
  // now db.Todo stores the Todo model from the models/todo file
const express = require('express');

// create dummy obj
const todo = {
  task: "learn mongoose",
  description: "keep referring to lessons"
}

// access to my module, create() mongoose give you 2 parameters (todo <<< is my todo obj that I just created)

// if there is err than give me the err message, savedTodo is my obj I will return to client my newtodo gets out!
db.Todo.create(todo, (err, newTodo) => {
  if(err){
      return console.log(err);
  }
  // log the new obj newTodo I just created
  console.log(`saved new todo: ${newTodo}`);
});