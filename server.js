require('dotenv').config()

// BASE SETUP
// =============================================================================

// call the packages we need
//var express = require('../..');
var express = require('express');        // call express
var app = express();                 // define our app using express
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var db = mongoose.connection;
mongoose.Promise = global.Promise;
db.on('error', console.error.bind(console, 'connection error:'));
var databaseUrl = process.env.databaseUrl
var databaseUser = process.env.databaseUser
var databasePassword = process.env.databasePassword
mongoose.connect('mongodb://'+databaseUser+':'+databasePassword+'@'+databaseUrl);

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

module.exports = app;

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);

