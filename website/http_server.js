/**
 * Created by zhang on 17-6-9.
 */
var http = require("http");
var url = require("url");
var querystring = require('querystring');

function start(route) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");
        console.log("Request received.");

        route(pathname);

        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hello World");
        response.end();
    }

    http.createServer(onRequest).listen(8888);

    console.log("Server has started.");
}

exports.start = start;