const Sequelize = require('sequelize');

class Type extends Sequelize.Model {
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
        },
        {
          tableName: 'type',
            modelName: 'type',
            timestamps: false,
          freezeTableName: true,
          sequelize
        }
    )
  }

  toJSON() {
      return {
          id: this.id,
          name: this.name
      };
  }
}

module.exports = Type;
