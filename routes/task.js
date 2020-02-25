const express = require('express');
const taskController = require('../controllers/task');
const router = express.Router();

// GET - All Tasks created
router.get('/tasks', taskController.getAllTasks);

// GET - All Tasks filtered by Tag created
router.get('/bytag', taskController.getTasksByTag);

// GET - All Tasks sorted by Due Date (Ascending)
router.get('/due', taskController.sortTasksByPriority);

// POST - Creates Task with Data
router.post('/create', taskController.createTask);

// PUT - Overides Task with New Data
router.put('/update/:id', taskController.editTask);

// DELETE - Deletes task
router.delete('/delete/:id', taskController.deleteTask);

module.exports = router;