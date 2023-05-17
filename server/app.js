var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var cors = require('cors')
var currenciesRouter = require('./routes/currencies');

var app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/currencies', currenciesRouter);

module.exports = app;
