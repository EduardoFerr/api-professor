const Parse = require('parse/node');

const key = {
    servidor: 'https://parseapi.back4app.com',
    app: 'SU0myMIe1AUitLKar0mum8My8RbQ87lEaRjjKDgh',
    js: 'GtvnNXChRLZRYBbWxNy9fM0LPloMfpYICCtMdJIL'
}

Parse.serverURL = key.servidor;
Parse.initialize(key.app, key.js);

var Professor = Parse.Object.extend("Professores");
var query = new Parse.Query(Professor);

module.exports = {
    listar: (req, res, next)  => {
        let resultado =  query.find();
        resultado.then(val => res.send(val));
    }
}