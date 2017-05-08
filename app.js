var path = require('path');
var express = require('express');
var pug = require('pug');
var bodyParser = require('body-parser');

var app = express();

console.log(JSON.stringify([
	{ id: '1', title: 'Broken Screen TSB', eventColor: 'red' },
	{ id: '2', title: 'Computer Broken', eventColor: 'red' },
	{ id: '3', title: 'Thomas Cook', eventColor: 'red' },
	{ id: '4', title: 'TUI', eventColor: 'red' },		
	{ id: '5', title: 'Waitrose', eventColor: 'red' }
],null,'                        '));

//load config
global._config = require('./libs/config')( path.join( __dirname, '/config.json' ) );
//additional configuration via command line - override default information
global._commands = require('./libs/commands')( _config );

_config.location = _config.location || "";
_config.locationId = _config.location.toLowerCase().split("'").join("").replace(" ","-");

//IF HOT LOADING ENABLED THEN REACT FILES ARE SERVED FROM MEMORY = NOT THE PUBLIC DIRECTORY
if( _config.enableHotLoading ){
	var _require = require;
	
	global._isDev = true;
	var webpack = _require('webpack');
	var config = _require('./webpack.config');

	var compiler = webpack(config);

	app.use(_require('webpack-dev-middleware')(compiler, {
		publicPath: config.output.publicPath,
		stats : {colors:true}
	}));

	app.use(_require('webpack-hot-middleware')(compiler));
}

if( !_config.enableDevMode ){
	//ANYTHING THAT ONLY RUNS ON THE DEVELOPERS COMPUTER CAN BE ADDED HERE
}

//set up views
app.set('view engine', 'pug');
app.set('views', path.join( __dirname, 'views' ) );

//add middleware
app.use( bodyParser.json() );

//set up our modules
app.all( '/', ( req, res, next ) => res.redirect('/resources') );
app.use( '/resources', require('./app/resources') );

//expose the public directory
app.use( express.static( path.join( __dirname, 'public' ) ) );

//start listening
app.listen(_config.port, (err) => {
	//if successful
	if( err ){
		console.error(err);
		process.exit();
	}else{
		console.log('Listening at http://localhost:'+_config.port+'/');
	}
});
