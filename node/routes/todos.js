const express = require('express');

const router = express.Router();

let todos = [];

router.get('/', (req, res, next) => {
   res.status(200).json({ todos: todos });
});

router.post('/todos', (req, res, next) => {
   const newTodo = {
      id: new Date().toISOString(),
      text: req.body.text
   };
   todos.push(newTodo);
   res.status(201).json({ message: 'Added todo', newTodo: newTodo, todos: todos });
});

router.put('/todos/:todoId', (req, res, next) => {
   const tid = req.params.todoId;
   const todoIndex = todos.findIndex(todo => todo.id === tid);
   todos[todoIndex] = {
      id: todos[todoIndex].id,
      text: req.body.text
   };
   res.status(200).json({ message: 'Updated todo', todos: todos });
});

router.delete('/todos/:todoId', (req, res, next) => {
   const tid = req.params.todoId;
   todos = todos.filter(todo => todo.id !== tid);
   res.status(200).json({ message: 'Deleted todo', todos: todos });
});

module.exports = router;