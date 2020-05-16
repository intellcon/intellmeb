var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

app.use(express.static('views'));

app.listen(5000);
