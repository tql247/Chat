require('dotenv').config();
const PORT = process.env.PORT || 3000

var express = require("express");
var app = express();

var server = require('http').createServer(app);

var io = require('socket.io')(server);

app.get('/', function (req, res, ext) {
    res.sendFile(__dirname + '/public/index.html');
});

app.use(express.static('public'));

io.on('connection', function(client){
    client.on('join', function(data){
        client.broadcast.emit('newMember', data);
    });
    client.on('message', function(data){
        // client.emit('thread', data);
        client.broadcast.emit('thread', data);
    });

    client.on('disconnect', function(reason) {
        console.log(reason);
        client.broadcast.emit('leave');
    });
});

server.listen(PORT);