const { DataTypes } = require('sequelize');
const database = require('../utils/connection');

const Cart = database.define('carts', {

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    totalPrice: {
        type: DataTypes.FLOAT,
        defaultValue: 0
    },

    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'user_id'
    }
});

module.exports = Cart;