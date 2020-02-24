const List = require('../models/list')

exports.getList = (req, res, next) => {
    res.status(200).json({
        lists: [{
            title: 'Item One', 
            dueDate: new Date(),
            content: 'Description of Item'
        }]
    });
};

exports.createList = (req, res, next) => {
    const title = req.body.title;
    const dueDate = req.body.dueDate;
    const content = req.body.content;
    const list = new List({
        title: title,
        content: content,
        dueDate: dueDate
      });
    // Creates list in DB
    list
      .save()
      .then(result => {
        res.status(201).json({
            message: 'List Item(s) Created Successfully!',
            post: result
        });
      })
      .catch(err => {
        console.log(err);
      });
};