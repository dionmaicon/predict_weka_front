var DiagnosticosDAO = require('../models/DiagnosticosDAO');
var SintomasSlidesDAO = require('../models/SintomasSlidesDAO');

module.exports.listar_sintomas = function(res){
  res.render('index', { informacoes: DiagnosticosDAO(),
                        slides: SintomasSlidesDAO(),
                        validacao: {},
                        resultado: {},
                        paciente: ''
                      }
            );
}
