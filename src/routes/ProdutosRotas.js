const express = require('express');
const ProdutosController = require('../controllers/ProdutosController');
const ProdutosRotas = express.Router();

const produtosController = new ProdutosController();
ProdutosRotas.get('/products', produtosController.listar);
ProdutosRotas.get('/products/:id', produtosController.consultarPorId);
ProdutosRotas.post('/products', produtosController.criar);
ProdutosRotas.put('/products/:id', produtosController.atualizar);
ProdutosRotas.delete('/products/:id', produtosController.deletar);

module.exports = ProdutosRotas;
