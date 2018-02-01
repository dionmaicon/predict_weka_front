var DiagnosticosDAO = require('../models/DiagnosticosDAO');
var SintomasSlidesDAO = require('../models/SintomasSlidesDAO');
var Axios = require('axios');

module.exports.consultar_paciente = function(application, req, res){

  var dadosForm = req.body;

  console.log(dadosForm);

  req.assert('idade', 'Nome não pode ser vazio').notEmpty();
  req.assert('sexo', 'Sexo não pode ser vazio').notEmpty();
  req.assert('febre_repentina', 'Febre repentina não pode ser vazio').notEmpty();
  req.assert('febre', 'Febre não pode ser vazio').notEmpty();
  req.assert('duracao_febre', 'Duração da febre não pode ser vazio').notEmpty();
  req.assert('dor_articulacao', 'Dor nas articulações não pode ser vazio').notEmpty();
  req.assert('inchaco_articulacao', 'Inchaço nas articulações não pode ser vazio').notEmpty();
  req.assert('dor_de_cabeca', 'Dor de cabeça não pode ser vazio').notEmpty();
  req.assert('dor_muscular', 'Dor muscular não pode ser vazio').notEmpty();
  req.assert('coceira', 'Coceira na pele não pode ser vazio').notEmpty();
  req.assert('manchas_vermelhas', 'Manchas vermelhas não pode ser vazio').notEmpty();
  req.assert('hipertrofia_ganglionar', 'Hipertrofia ganglionar não pode ser vazio').notEmpty();
  req.assert('conjuntivite', 'Conjuntivite não pode ser vazio').notEmpty();

  var erros = req.validationErrors();

  if(erros){
    res.render('index', { informacoes: DiagnosticosDAO(),
                          slides: SintomasSlidesDAO(),
                          validacao: erros,
                          resultado: {},
                          paciente: ''
                        }
              );
    return;
  }

  Axios.post('http://localhost:3000/j48', dadosForm)
        .then((response) => {
          res.render('index', { informacoes: DiagnosticosDAO(),
                                slides: SintomasSlidesDAO(),
                                validacao: {},
                                resultado: response.data,
                                paciente: dadosForm.nome
                              }
                    );
        })
        .catch((error) => {
          console.log(error);
        });

}
