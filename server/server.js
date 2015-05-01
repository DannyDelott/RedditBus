var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.resolve("./client")));

app.get('/', function(req, res) {
  res.render('index.html');
});

var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Listening on port:', port);
});
