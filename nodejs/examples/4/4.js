/* Hands On 4 - Events / EventEmitter */

var EventEmitter 	= require('events').EventEmitter;
var logger        = new EventEmitter;

logger.on('error', function(message){ /* <= So horchen wir auf Events */
  console.log('ERR: ' + message);
});

logger.emit('error', 'Spilled Milk'); /* <= So "werfen" wir Events */
logger.emit('error', 'Cracked Egg');


var http          = require('http');
var fs            = require('fs');
var port          = 9995;
var HttpServer 		= http.createServer(); /* <= Expliziter geschrieben, s.u. */ 


HttpServer.on('request', function(req, res) { /* <= Jetzt kann man schön erkennen, dass die Klasse den Event 'request' bereitstellt. */ 

  console.log(req.url);

  fs.readFile('index.html', function (err, data) {
    if (err) throw err;
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(data);
  });

});

HttpServer.listen(port);

console.info('listening to port: ' + port);