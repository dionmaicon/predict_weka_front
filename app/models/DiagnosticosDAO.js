var fs = require('fs');

var sintomas_json = fs.readFileSync('./app/public/sintomas.json');

module.exports = function() {
  var dados = JSON.parse(sintomas_json);
  return dados;
};
