module.exports = function(app, neko) {
	app.get('/feet', function(req, res) {
		console.log('Recebido uma conexão na API. (feet)')

	async function nekoGirl() {
		res.send(await neko.nsfw.feet());
	}
	nekoGirl()
	})
}