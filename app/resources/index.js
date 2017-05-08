var express = require('express'),
	path = require('path'),
	bodyParser = require('body-parser'),
	fs = require('fs'),
	config = require(path.resolve('./config.json')),
	mkdirp = require('mkdirp'),
	_ = require('lodash');



var app = module.exports = express();

app.use(bodyParser.json());

app.get('/', ( req, res, next ) => {
	res.render('react', {
		styles : [
		],
		scripts : [
			'/bundles/resources/index.bundle.js'
		]
	});
});
