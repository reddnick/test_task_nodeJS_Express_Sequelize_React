module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('item', {
                id: {
                    type: Sequelize.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                },
                name: {
                    type: Sequelize.STRING,
                    notEmpty: true,
                    allowNull: false,
                },
            },
            {
                charset: 'utf8',
                logging: console.log
            }
        );
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('item');
    }
};
