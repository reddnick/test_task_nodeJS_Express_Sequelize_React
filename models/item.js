const Sequelize = require('sequelize');

class Item extends Sequelize.Model {
    static init(sequelize, type) {
        return super.init(
            {
                id: {
                    type: type.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                },
                name: {
                    type: type.STRING,
                    notEmpty: true,
                    allowNull: false,
                },
                typeId: {
                    type: type.INTEGER,
                    allowNull: true,
                }
            },
            {
                tableName: 'item',
                modelName: 'item',
                timestamps: false,
                sequelize
            }
        )
    }
}

module.exports = Item;
