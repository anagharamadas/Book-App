const express = require('express');
const app = express();
const bookRoutes = require('./api/routes/books');
const userRoutes = require('./api/routes/user');


const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require ('mongoose');

mongoose.connect('mongodb+srv://test:test@cluster0.l2ggn.mongodb.net/test?retryWrites=true&w=majority',() => {
    console.log("Database is connected");
});

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());