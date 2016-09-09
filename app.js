var express = require('express');
var app = express();

app.get("/", function(req, res) {
  res.end("all is well");
});

app.listen(4000);
