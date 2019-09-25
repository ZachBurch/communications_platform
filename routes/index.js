import express from 'express';
import emailController from '../emailsController/emails';

const router = express.Router();

// router.get('/api/v1/todos', TodoController.getAllTodos);
// router.get('/api/v1/todos/:id', TodoController.getTodo);
router.post('/emails', emailController.validate('createEmail'), emailController.createEmail);
// router.put('/api/v1/todos/:id', TodoController.updateTodo);
// router.delete('/api/v1/todos/:id', TodoController.deleteTodo);

export default router;