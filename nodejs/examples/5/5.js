
require("coffee-script");
http = require('http');

class Animal
  constructor: (@name) ->

  move: (meters) ->
    console.log @name + " moved #{meters}m."

class Snake extends Animal
  move: ->
    console.log "Slithering..."
    super 5

class Horse extends Animal
  move: ->
    console.log "Galloping..."
    super 45

sam = new Snake "Sammy the Python"
tom = new Horse "Tommy the Palomino"

sam.move()
tom.move()

server = http.createServer (req, res) ->
  response.writeHead 200, {'Content-Type': 'text/plain'}
  response.end 'Hello World'
server.listen 8124
console.log 'Server running at http://0.0.0.0:8124/'
