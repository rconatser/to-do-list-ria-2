const express = require('express');
const taskController = require('../controllers/task');
const router = express.Router();

/* 
    GET / POST Requests:
        - Create User
        - Create Task
        - Show Task(s) 

    PUT / DELETE Requests:
        - Update Task Item
        - Delete Task Item

    To Do Task Fields
        - Title for Task Item
        - Description for Task Item
        - Due Date
        - Priority
        - Tags
*/

// GET - Single Task created
router.get('/task', taskController.getTask);

// GET - All Tasks created
router.get('/all', taskController.getAllTasks);

// GET - All Tasks filtered by Tag created
router.get('/tag/:tag', taskController.getTasksByTag);

// POST - Creates Task with Data
router.post('/create', taskController.createTask);

module.exports = router;