var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(3000)

var io = require('socket.io')(server)

app.use(express.static('./public'));

io.on('connection',function(socket) {
    console.log('connection established');


   
    socket.on('chat',function(data){
        socket.broadcast.emit('push',data)
    })
})
console.log('server running on 3000');