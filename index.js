var express = require('express'); 
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
 var path = require('path');


 app.use(express.static(path.join(__dirname, 'public')));
 app.get('/', function(req, res) {

 res.sendFile(__dirname + '/index.html'); });


io.on("connection", function(data){

	data.on("outbox", function(value){
		return send(value);
	});
	function send(value){
	data.broadcast.emit("inbox", value);
	}

	});




server.listen(8100, function() {

 console.log('Listening on *:8100');

 });
