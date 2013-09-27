var express = require( 'express'),
		io = require( 'socket.io'),
		app = express( ),
		server = require( 'http').createServer( app),
		stream = require( 'stream'),
		path = require( 'path'),
		iq = io.listen( server),
		config = require( './config'),
		logger = new stream.Stream( );

app.configure('development', function ( ) {
	app.use( express.bodyParser( ));
	app.use( express.static( path.normalize( './public')));
	app.use( express.directory( path.normalize( './public')));
});

try {
  routes = require( './router');
  routes.forEach(function (value, key, array) {
  	app[value.method](value.matches,value.callback);
  });
} catch( err) {
  console.error( err);
}

iq.configure('development', function ( ) {
	iq.set( 'log level', 2);
})


iq.on( 'connection', function ( socket) {
	socket.on( 'get:ui', function ( data) {
		socket.emit( 'update', {
			control: control,
			status: status
		});
	});
});

server.listen( config.port);
