var finalHandler = require('finalHandler');
var http = require('http');
var serveStatic = require('serve-static');

var serve = serveStatic('calculator/dist', {'index': ['index.html']});

var server = http.createServer(function(req, res) {
    var done = finalHandler(req, res);
    serve(req, res, done);
});

server.listen(4000);
