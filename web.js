var fs = require('fs');
var express = require('express');
var app = express();
app.use(express.logger());
var readerBuffer;

app.get('/', function(request, response) {
  fs.readFile('index.html',function (err,data) {
     if (err) throw err;
     readerBuffer = data.toString(); 
  });
  response.send(readerBuffer);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
