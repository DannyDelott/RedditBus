/* *****************
 * Require Imports *
 * *****************/

var express = require('express');
var path = require('path');

/* ***********************
 * Initialize Middleware *
 * **********************/

// Instantiate the express object
var app = express();

// Use the static assets from the client directory
app.use(express.static(path.resolve("./client")));

/* **************
 * GET Requests *
 * **************/

// index.html
app.get('/', function(req, res) {
  res.sendFile('index.html');
});

/* ******************
 * Start the server *
 * ******************/

var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Listening on port:', port);
});
