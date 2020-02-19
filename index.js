const express = require('express')
const professor = require('./rotas/professor');

const app = express()
var cors = require('cors')
const porta = process.env.PORT || 8080;

app.use(cors());

app.use('/professores', professor);

app.listen(porta, function () {
    console.log(`Servidor escutando na porta ${porta}.`);
});