const { DataTypes } = require('sequelize');
const database = require('../utils/connection');

const InOrder = database.define('in_order', {

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },

    status: {
        type: DataTypes.STRING(20),
        allowNull: false,
        defaultValue: 'Incompleted'
    },

    orderId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'order_id'
    },

    productId : {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'product_id'
    }
})

module.exports = InOrder;