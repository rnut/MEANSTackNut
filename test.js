var io = require('socket.io').listen(8080);

io.sockets.on('connection',function(socket){
	io.sockets.emit('menu',{pizza: 'Hawaiian pizza'});

	socket.on('order',function(pizza){
		console.log('You want to order menu ',pizza);
	});
	socket.on('disconnect',function(){
		io.sockets.emit('end call');
	});
});