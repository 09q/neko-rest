const app = require('./config/config-routes')(),
	  port = 3000

app.listen(port, function() {
	console.log(`Servidor aberto na porta ${port}!`)
})

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/public/index.html')
})
