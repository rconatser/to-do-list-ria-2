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

exports.editTask = async (req, res, next) => {
  const title = req.body.title;
  const dueDate = req.body.dueDate;
  const content = req.body.content;
  const priority = req.body.priority;
  const tags = req.body.tags;

  const task = await Task.findByIdAndUpdate({_id: req.params.id}, {query});
  
}

exports.deleteTask = async (req, res, next) => {
  try {
    var result = await Task.deleteOne({ _id: req.params.id }).exec();
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
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