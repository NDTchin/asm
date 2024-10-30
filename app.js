const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost/TreeShop', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
s
app.use('/', require('./routes/treeRoutes'));  
app.use('/about', require('./routes/aboutRoutes')); 

module.exports = app;