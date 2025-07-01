const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const Categoria = sequelize.define('categorias', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: DataTypes.STRING,
    slug: DataTypes.STRING,
    use_in_menu: {
        type: DataTypes.BOOLEAN, 
        defaultValue: false
    }
    },
    {
        timestamps: true
    }
);

Categoria.sync({force: true}).then(() => {
    Categoria.create(
    {
        name: 'Camisetas',
        slug: 'camisetas'
    });
    Categoria.create(
    {
        name: 'Calças',
        slug: 'calcas'
    });
    Categoria.create(
    {
        name: 'Bonés',
        slug: 'bones'
    });
    Categoria.create(
    {
        name: 'Headphones',
        slug: 'headphones'
    });
    Categoria.create(
    {
        name: 'Tênis',
        slug: 'tenis'
    });
    return true;
});

class CategoriaModel {
    static async listar() {
        const dados = await Categoria.findAll();
        return dados;
    }

    static async consultarPorId(id) {
        const categoria = await Categoria.findAll({where: {id: id}});
        const dados = {name: categoria[0].name, slug: categoria[0].slug, use_in_menu: categoria[0].use_in_menu, 
            createdAt: categoria[0].createdAt, updatedAt: categoria[0].updatedAt
        };
        return dados;
    }

    static async criar(data) {
        await Categoria.create(data);
    }

    static async atualizar(id, data) {
        await Categoria.update(data, {where: {id: id}});
    }

    static async deletar(id) {
        await Categoria.destroy({where: {id: id}});
    }
}

module.exports = CategoriaModel;
