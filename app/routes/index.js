var fs = require('fs');

module.exports = function(application){
	application.get('/', function(req, res){
		application.app.controllers.sintomas.listar_sintomas(res);
	});

	application.post('/consultar', function(req, res){
		application.app.controllers.consulta.consultar_paciente(application, req, res);
	});
}
