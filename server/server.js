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

app.get('/dist/app.min.js', function(req, res){
  res.sendFile('/dist/app.min.js');
});

app.get('/dist/lib.min.js', function(req, res){
  res.sendFile('/dist/lib.min.js');
});

/* ******************
 * Start the server *
 * ******************/

var port = process.env.PORT || 3000;

var server = app.listen(port, function() {
  //var host = server.address().address;

  console.log('Listening on port:', port);
});
