'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn(
            'item',
            'typeId',
            {
                type: Sequelize.INTEGER,
                references: {
                    model: 'type',
                    key: 'id'
                },
            },
            {
                logging: console.log
            }
        );
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.removeColumn(
            'item',
            'typeId'
        )
    }
};
