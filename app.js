var express = require('express');
var app = express();

app.get("/", function(req, res) {
  res.end("all is good with the app");
});

app.listen(process.env.VCAP_APP_PORT || 4000);
