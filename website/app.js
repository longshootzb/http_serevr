/**
 * Created by zhang on 17-5-27.
 */

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
// app.get('/', function(req, res){
//     res.send('<h1>Hello world</h1>');
// });
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});
io.on('connection', function(socket){
    socket.on('chat message', function(msg){

        io.emit('chat',msg);
        console.log('message: ' + msg);

    });
});
http.listen(3000, function(){
    console.log('listening on *:3000');
});