/**
 * Created by zhang on 17-6-9.
 */
var server = require("./http_server");
var router = require("./router");

server.start(router.route);