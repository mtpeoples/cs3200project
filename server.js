var express = require('express');
var path = require('path');
var mongoose = require('mongoose');

var uristring = process.env.MONGOLAB_URI || 'mongodb://127.0.0.1/cs3200project';

var db = mongoose.connect(uristring);

var app = express();

app.use(express.static(path.join(__dirname, 'src')));
app.use(express.static(path.join(__dirname, 'bower_components')));

require('./src/server/app.js')(app, mongoose);

var port = process.env.PORT || 8082;

app.get('*', function(req, res) {
  res.sendFile(__dirname + '/src/client/index.html');
});

var server = app.listen(process.env.PORT || 8082, function() {

  // var port = server.address().port;

  console.log('http server listening @: ' + port)
});
