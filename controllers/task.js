const Task = require('../models/task')

exports.getTask = (req, res, next) => {
    Task.find()
    .then(result => {
      res.status(200).json(result);     
    })
};

exports.getAllTasks = (req, res, next) => {
  Task.find()
  .then(result => {
    res.status(200).json(result);     
  })
};

exports.getTasksByTag = (req, res, next) => {
  const tags = req.body.tags;
  Task.findById(tags)
  .then(result => {
    res.status(200).send(result)
  })
};

exports.createTask = (req, res, next) => {
    const title = req.body.title;
    const dueDate = req.body.dueDate;
    const content = req.body.content;
    const priority = req.body.priority;
    const tags = req.body.tags;
    const task = new Task({
        title: title,
        content: content,
        dueDate: dueDate,
        priority: priority,
        tags: tags
      });
    // Creates list in DB
    task.save()
      .then(result => {
        res.status(201).json({
            message: 'Task Created Successfully!',
            post: result
        });
      })
      .catch(err => {
        console.log(err);
      });
};