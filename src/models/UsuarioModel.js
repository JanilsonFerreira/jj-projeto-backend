const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const Usuario = sequelize.define('usuarios', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstname: DataTypes.STRING,
        surname: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING
    },
    {
        timestamps: true
    }
);

Usuario.sync({force: true}).then(() => {
    return Usuario.create({
        firstname: 'admin',
        surname: 'admin',
        email: 'admin@teste.com',
        password: "ds123456"
    });
});

class UsuarioModel {
    static async authenticate(login, senha) {
        const usuario = await Usuario.findAll({where: {email: login, password: senha}});
        if (usuario.length == 0) {
            return null;
        }
        const dados = {email: usuario[0].email, password: usuario[0].password};
        return dados;
    }

    static async listar() {
        const dados = await Usuario.findAll({attributes: ['id', 'firstname', 'surname', 'email', 'createdAt', 'updatedAt']});
        return dados;
    }

    static async consultarPorId(id) {
        const usuario = await Usuario.findAll({where: {id: id}});
        if (usuario.length == 0) {
            return [];
        }
        const dados = {id: usuario[0].id, firstname: usuario[0].firstname, surname: usuario[0].surname, email: usuario[0].email, 
            createdAt: usuario[0].createdAt, updatedAt: usuario[0].updatedAt
        };
        return dados;
    }

    static async criar(data) {
        await Usuario.create(data);
    }

    static async atualizar(id, data) {
        await Usuario.update(data, {where: {id: id}});
    }

    static async deletar(id) {
        await Usuario.destroy({where: {id: id}});
    }
}

module.exports = UsuarioModel;
