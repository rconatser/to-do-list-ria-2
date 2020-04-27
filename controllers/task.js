const Task = require('../models/task')

exports.getAllTasks = (req, res, next) => {
  Task.find()
  .then(result => {
    res.status(200).json(result);     
  })
};

exports.getTasksByTag = (req, res, next) => {
  const tags = req.query;
  Task.find(tags)
  .then(result => {
    res.status(200).send(result)
  })
};

exports.getOneTask = (req, res, next) => {
	const id = req.params.id;
	Task.find(id)
	.then(result => {
	  res.status(200).send(result)
	})
  };

exports.sortTasksByPriority = (req, res, next) => {
  Task.find()
    .sort({dueDate: 1}) // sorts by date ascending
    .then(result => {
      res.status(200).send(result)
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.editTask = (req, res, next) => {
  const id = req.params.id;
  const title = req.body.title;
  const dueDate = req.body.dueDate;
  const content = req.body.content;
  const priority = req.body.priority;
  const tags = req.body.tags;

  Task.findByIdAndUpdate(id)
  .then(task => {
    if(!task){
      const error = new Error('Could not find post.');
      error.statusCode = 404;
      throw error;
    }
    task.title = title;
    task.dueDate = dueDate;
    task.content = content;
    task.priority = priority;
    task.tags = tags;
    return task.save();
  })
  .then(result => {
    res.status(200).json({
      message: 'Task successfully updated!',
      task: result
    })
  })
  .catch(err => {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  });
};

exports.deleteTask = (req, res, next) => {
  const id = req.params.id;
  Task.findById(id)
  // when users get implemented, will add verification that post belongs to user
    .then(task => {
      if(!task){
        const error = new Error('Could not find post.');
        error.statusCode = 404;
        throw error;
      }
      return Task.findByIdAndRemove(id);
    })
    .then(result => {
      console.log(result);
      res.status(200).json({
        message: 'Task has been deleted.'
      })
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
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
            task: result
        });
      })
      .catch(err => {
        console.log(err);
      });
};