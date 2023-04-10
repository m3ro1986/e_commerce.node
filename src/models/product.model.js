const { DataTypes } = require('sequelize');
const database = require('../utils/connection');

const Product = database.define('products', {

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    name: {
        type: DataTypes.STRING(30),
        allowNull: false
    },

    description: {
        type: DataTypes.STRING,
        allowNull: false
    },

    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },

    image: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'image.com'
    },

    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'user_id'
    }
    
})

module.exports = Product;