const UsuarioModel = require('../models/UsuarioModel');

class AuthController {
    async login(login, senha) {
        const dados = await UsuarioModel.authenticate(login, senha);
        return dados;
    }
}

module.exports = AuthController;
