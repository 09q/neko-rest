const express = require('express'),
      client = require('nekos.life'),
	  consign = require('consign')

module.exports = function() {
	let app = express()
	let neko = new client()

	consign()
		.include('./routes')
		.into(app, neko)

	return app;
	return neko;
}