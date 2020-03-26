module.exports = function(app, neko) {
	app.get('/neko', function(req, res) {
		console.log('Recebido uma conexão na API. (neko)')

	async function nekoGirl() {
		res.send(await neko.nsfw.neko());
	}
	nekoGirl()
	})
}
