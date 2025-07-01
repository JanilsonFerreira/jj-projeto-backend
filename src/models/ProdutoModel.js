const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const Produto = sequelize.define('produtos', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        enabled: {
            type: DataTypes.BOOLEAN, 
            defaultValue: false
        },
        name: DataTypes.STRING,
        slug: DataTypes.STRING,
        use_in_menu: {
            type: DataTypes.BOOLEAN, 
            defaultValue: false
        },
        stock: {
            type: DataTypes.INTEGER, 
            defaultValue: 0
        },
        description: DataTypes.STRING,
        price: DataTypes.FLOAT,
        price_with_discount: DataTypes.FLOAT
    },
    {
        timestamps: true
    }
);

Produto.sync({force: true}).then(() => {
    Produto.create(
    {
        name: 'Nike Air Force One',
        slug: 'nike-air-force-one',
        stock: 40,
        description: 'Tênis Casual Masculino',
        price: 320.00,
        price_with_discount: 192.00
    });
    Produto.create(
    {
        name: 'Nike Air Max',
        slug: 'nike-air-max',
        stock: 50,
        description: 'Tênis Casual Feminino',
        price: 300.00,
        price_with_discount: 210.00
    });
    return true;
});

class ProdutoModel {
    static async listar() {
        const dados = await Produto.findAll();
        return dados;
    }

    static async consultarPorId(id) {
        const dados = await Produto.findAll({where: {id: id}});
        return dados;
    }

    static async criar(data) {
        await Produto.create(data);
    }

    static async atualizar(id, data) {
        await Produto.update(data, {where: {id: id}});
    }

    static async deletar(id) {
        await Produto.destroy({where: {id: id}});
    }
}

module.exports = ProdutoModel;
