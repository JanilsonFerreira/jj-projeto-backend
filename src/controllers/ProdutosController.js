const ProdutoModel = require('../models/ProdutoModel');

class ProdutosController {
    async listar(request, response) {
        const dados = await ProdutoModel.listar();
        return response.json(dados);
    }

    async consultarPorId(request, response) {
        const id = request.params.id;
        const dados = await ProdutoModel.consultarPorId(id);
        return response.json(dados);
    }

    async criar(request, response) {
        const body = request.body;
        await ProdutoModel.criar(body);
        return response.status(201).json({
            message: "Produto cadastrado com sucesso"
        });
    }

    async atualizar(request, response) {
        const id = request.params.id;
        const body = request.body;
        await ProdutoModel.atualizar(id, body);
        return response.json({
            message: "Produto atualizado com sucesso"
        });
    }

    async deletar(request, response) {
        const id = request.params.id;
        await ProdutoModel.deletar(id);
        return response.json({
            message: "Produto removido com sucesso"
        });
    }
}

module.exports = ProdutosController;
