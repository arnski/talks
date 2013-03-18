
var _      = require('underscore');
var http   = require('http');
var url    = require('url');
var net    = require('net');

var requestCounter = 0;

var HttpServer = http.createServer(function(req, res) {

  requestCounter++;

  console.log("Request #" + requestCounter + ": " + req.url);

  var currentDate = new Date();
  var utc         = currentDate.getUTCMilliseconds();

  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World - ' + utc);
});

HttpServer.listen(9995);
console.info('listening to port: 9995');