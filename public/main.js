console.log('main.js loaded')

var socket = io()

socket.on('connect',function() {
    console.log('connected')
})


function send() {
    var inputBox = document.getElementById('inputBox');
    socket.emit('chat',{
        body: inputBox.value})
    inputBox.value = ''
}

socket.on('push',function(data) {
    console.log(data)
})