var express = require('express');
var app = express();

var http = require('http').Server(app);
var io = require('socket.io')(http);

var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var db = mongoose.connection;
var path = require('path');

mongoose.Promise = global.Promise;
db.on('error', console.error.bind(console, 'connection error:'));
var databaseUrl = process.env.DATABASEURL || require('./env.json')['DATABASEURL']
var databaseUser = process.env.DATABASEUSER  || require('./env.json')['DATABASEUSER']
var databasePassword = process.env.DATABASEPASSWORD  || require('./env.json')['DATABASEPASSWORD']
mongoose.connect('mongodb://'+databaseUser+':'+databasePassword+'@'+databaseUrl);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

io.on('connection', function(socket) {
  console.log('new connection');
});

exports.io = io


// --------------- API -------------------
var cashFlow = require('./api/cashFlow');


app.get('/api/cashFlow', cashFlow.list);
app.post('/api/cashFlow', cashFlow.create);

var port = process.env.PORT || 8080;

module.exports = app;

app.use(express.static(__dirname + '/public'));

app.get('*', function(req, res) {
    res.sendfile('./public/index.html');
});

http.listen(port);
console.log('Magic happens on port ' + port);

