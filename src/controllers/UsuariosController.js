const UsuarioModel = require('../models/UsuarioModel');

class UsuariosController {
    async listar(request, response) {
        const dados = await UsuarioModel.listar();
        return response.json(dados);
    }

    async consultarPorId(request, response) {
        const id = request.params.id;
        const dados = await UsuarioModel.consultarPorId(id);
        return response.json(dados);
    }

    async criar(request, response) {
        const body = request.body;
        await UsuarioModel.criar(body);
        return response.status(201).json({
            message: "Usuário cadastrado com sucesso"
        });
    }

    async atualizar(request, response) {
        const id = request.params.id;
        const body = request.body;
        await UsuarioModel.atualizar(id, body);
        return response.json({
            message: "Usuário atualizado com sucesso"
        });
    }

    async deletar(request, response) {
        const id = request.params.id;
        await UsuarioModel.deletar(id);
        return response.json({
            message: "Usuário removido com sucesso"
        });
    }
}

module.exports = UsuariosController;
