const User = require('../models/user')

exports.getUser = (req, res, next) => {
    Task.find()
    .then(result => {
        res.status(200).json(result);     
    })
};