const express = require('express');
const feedRoute = require('./routes/feed');
const bodyParser = require('body-parser');

const app = express();
//app.use(bodyParser.urlencoded()); // x-www-form-urlencoded for the forms in the views
app.use(bodyParser.json()) // For REST APIs applicatio/json
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');    next();
});
app.use('/feed', feedRoute);

app.listen(8080);