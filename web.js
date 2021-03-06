var fs = require('fs')
    filename = 'index.html'
    encode = 'utf8';
var express = require('express');
var app = express();
app.use(express.logger());
var readerBuffer;

app.get('/', function(request, response) {
  fs.readFile(filename,encode,function (err,data) {
     if (err) throw err; 
     response.send(data);
  });
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
