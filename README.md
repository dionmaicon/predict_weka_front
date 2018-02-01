# predict_weka_front
Front-end for API weka Prediction.
Front-end de uma aplicação que realiza consultas numa API. A API pode ser encontrada em:
https://github.com/dionmaicon/predict_weka_api
Trata-se de uma versão de testes que estavamos implementando a nível de curiosidade.
Os dados gerados para o dataset são randomicos e podem ser encontrados nos diretorios da API que contem também uma versão do WEKA.
Se quiser continuar esse projeto e precisar de qualquer ajuda, entre em contato: dionmaicon@outlook.com 
<p>Para rodar o projeto. </p>
<ol> 1 - Faça o download do repositorio. </ol>
<ol> 2 - Dentro da pasta base do projeto digite:</ol> npm install (Se não tem o NPM instale, pode ser encontrado em: https://docs.npmjs.com/cli/install)
<ol>3 - Depois digite: node app.js ou nodemon app.js </ol> (Para instalar o nodemon digite: npm install -g nodemon)
<ol>4 - Se precisar altere o arquivo em app/controllers/consulta.js</ol>
Axios.post('http://localhost:3000/j48', dadosForm) substitua pelo IP que está rodando a API.<br>
<ol>5 - Abra o navegador e no endereço do passo 4 digite a URL.</ol> Ex: http://localhost:3000
<ol>6 - Faça a consulta com o console do navegador aberto para ver se não há problemas de conexão.</ol>

Este projeto não é profissional e fizemos em uma tarde. Então alguns bugs podem ocorrer, mas se precisa achar um meio de integrar Nodejs, Angular4 e WEKA. Este projeto pode guiar você. 
