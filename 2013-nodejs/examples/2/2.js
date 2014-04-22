/* Hands On 2 - Plain Hello World Webserver */
var http           = require('http');

var port           = 9995;
var requestCounter = 0;

var HttpServer = http.createServer(function(req, res) {

  requestCounter++;

  console.log("Request #" + requestCounter + ": " + req.url);

  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World - ' + requestCounter);
});

HttpServer.listen(port);
console.info('listening to port: ' + port);