const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const taskRoutes = require('./routes/task');
const userRoutes = require('./routes/user');

const port = 8080;
const app = express();

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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', taskRoutes);
app.use('/user', userRoutes);

mongoose
    .connect('mongodb+srv://dgm4790:3tTMvKF9MnKMFBd9@cluster0-wtpya.mongodb.net/app?retryWrites=true&w=majority')
    .then(result => {
        app.listen(port);
        console.log(`Server is listening on port ${port}`);
    })
    .catch(err => {
        console.log(err);
    });
