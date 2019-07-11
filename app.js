var express = require('express');
var http = require('http');
const path = require('path')
const PORT = process.env.PORT || 5000


var app = express();
var server = http.createServer(app).listen(PORT)

var io = require('socket.io')(server)

app.use(express.static(path.join(__dirname, 'public')));

io.on('connection',function(socket) {
    console.log('connection established');


   
    socket.on('chat',function(data){
        socket.broadcast.emit('push',data)
    })
})
console.log('server running on '+PORT);