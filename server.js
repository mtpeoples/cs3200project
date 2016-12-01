var express = require('express');
var path = require('path');
var mongoose = require('mongoose');

var connectionString = 'mongodb://localhost/cs3200project'
var db = mongoose.connect(connectionString);

var app = express();

app.use(express.static(path.join(__dirname, 'src')));
app.use(express.static(path.join(__dirname, 'bower_components')));

require('./src/server/app.js')(app, mongoose);

app.get('*', function(req, res) {
  res.sendFile(__dirname + '/src/client/index.html');
});

var server = app.listen(8082, function() {

  var port = server.address().port;

  console.log('http server listening @: ' + port)
});