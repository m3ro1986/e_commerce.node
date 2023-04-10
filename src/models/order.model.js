const { DataTypes } = require('sequelize');
const database = require('../utils/connection');

const Order = database.define('orders', {

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
    },

    status: {
        type: DataTypes.STRING(20),
        allowNull: false,
        defaultValue: 'Incompleted'
    }
});

module.exports = Order;