module.exports = function(app, neko) {
	app.get('/avatar', function(req, res) {
		console.log('Recebido uma conexão na API. (avatar)')

	async function nekoGirl() {
		res.send(await neko.nsfw.avatar());
	}
	nekoGirl()
	})
}