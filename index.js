const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
import cors from 'cors';

const taskRoutes = require('./routes/task');
const userRoutes = require('./routes/user');

const port = process.env.PORT || 8080;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
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
