const CategoriaModel = require('../models/CategoriaModel');

class CategoriasController {
    async listar(request, response) {
        const dados = await CategoriaModel.listar();
        return response.json(dados);
    }

    async consultarPorId(request, response) {
        const id = request.params.id;
        const dados = await CategoriaModel.consultarPorId(id);
        return response.json(dados);
    }

    async criar(request, response) {
        const body = request.body;
        await CategoriaModel.criar(body);
        return response.status(201).json({
            message: "Categoria cadastrada com sucesso"
        });
    }

    async atualizar(request, response) {
        const id = request.params.id;
        const body = request.body;
        await CategoriaModel.atualizar(id, body);
        return response.json({
            message: "Categoria atualizada com sucesso"
        });
    }

    async deletar(request, response) {
        const id = request.params.id;
        await CategoriaModel.deletar(id);
        return response.json({
            message: "Categoria removida com sucesso"
        });
    }
}

module.exports = CategoriasController;
