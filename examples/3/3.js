/* Hands On 3 - Static File Webserver, Blocking vs. Non-Blocking */

var http           = require('http');
var fs       	     = require('fs');

var port           = 9995;

var HttpServer = http.createServer(function(req, res) {

  console.log(req.url);

  /* Non- Blocking */
  fs.readFile(__dirname + '/index.html', function (err, data) {
    if (err) throw err;
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(data);
  });

  /* Blocking (Boooh) 
  var contents = fs.readFileSync('/etc/hosts');
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(data);
  */
});

HttpServer.listen(port);

console.info('listening to port: ' + port);