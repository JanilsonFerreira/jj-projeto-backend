const express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const UsuariosRotas = require('./UsuariosRotas');
const CategoriasRotas = require('./CategoriasRotas');
const ProdutosRotas = require('./ProdutosRotas');
const RotasPrivadas = express.Router();

RotasPrivadas.use((request, response, next) => {
    let auth = false;
    if (request.headers.token) {
        const { token } = request.headers;
        try {
            jwt.verify(token, process.env.APP_KEY_TOKEN);
            auth = true;
        }
        catch (error) {
            return response.status(403).send(error);
        }
    }
    if (auth === false) {
        return response.status(403).send("Não Autorizado");
    }
    next();
});

RotasPrivadas.use(UsuariosRotas);
RotasPrivadas.use(CategoriasRotas);
RotasPrivadas.use(ProdutosRotas);

module.exports = RotasPrivadas;
