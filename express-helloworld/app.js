var express = require('express');
app = express();

app.get('/adam', function (req, res) {
  res.send('Hello adam!\n');
});

app.get('/anas', function(req, res) {
 res.send('Hello anas!\n');
});

app.get('/aser', function(req, res) {
 res.send('Hello aser!\n');
});

app.get('/alaa', function(req, res) {
 res.send('Hello alaa!\n');
});

app.get('/', function(req, res) {
 res.send('Hello islam!\n');
});

app.listen(8080, '0.0.0.0', function () {
  console.log('Example app listening on port 8080!');
});
