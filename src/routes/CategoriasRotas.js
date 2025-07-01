const express = require('express');
const CategoriasController = require('../controllers/CategoriasController');
const CategoriasRotas = express.Router();

const categoriasController = new CategoriasController();
CategoriasRotas.get('/categories', categoriasController.listar);
CategoriasRotas.get('/categories/:id', categoriasController.consultarPorId);
CategoriasRotas.post('/categories', categoriasController.criar);
CategoriasRotas.put('/categories/:id', categoriasController.atualizar);
CategoriasRotas.delete('/categories/:id', categoriasController.deletar);

module.exports = CategoriasRotas;
