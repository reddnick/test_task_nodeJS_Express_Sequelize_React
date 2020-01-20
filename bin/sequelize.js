const Sequelize = require('sequelize');
const Item = require('../models/item');
const Type = require('../models/type');
const config = require('../config/config');

console.log(process.env.NODE_ENV);
const sequelize = new Sequelize({
    database: config[process.env.NODE_ENV].database,
    username: config[process.env.NODE_ENV].username,
    password: config[process.env.NODE_ENV].password,
    host: config[process.env.NODE_ENV].host,
    dialect: config[process.env.NODE_ENV].dialect
});

const ItemModel = Item.init(sequelize, Sequelize);
const TypeModel = Type.init(sequelize, Sequelize);

ItemModel.belongsTo(TypeModel, {as: "type"});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully')
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
        throw err;
    });

module.exports = {ItemModel, TypeModel, sequelize};
