var fs = require('fs');

var sintomas_json = fs.readFileSync('./app/public/sintomas_slides.json');

module.exports = function() {
  var dados = JSON.parse(sintomas_json);
  return dados;
};
