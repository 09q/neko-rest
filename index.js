const app = require('./config/config-routes')(),
	  port = 3000

app.listen(port, function() {
	console.log(`Servidor aberto na porta ${port}!`)
})

