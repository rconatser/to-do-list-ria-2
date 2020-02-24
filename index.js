const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const listRoutes = require('./routes/list');

const port = 8080;
const app = express();

app.use(bodyParser.json());
app.use('/feed', listRoutes);

// listen for requests
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

mongoose
    .connect('mongodb+srv://rconatser:Rc119335@cluster0-wtpya.mongodb.net/test?retryWrites=true&w=majority')
    .then(result => {
        app.listen(8080);
    })
    .catch(err => {
        console.log(err);
    });
