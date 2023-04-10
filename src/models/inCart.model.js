const { DataTypes } = require('sequelize');
const database = require('../utils/connection');

const InCart = database.define('in_carts', {

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

    cartId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'cart_id'
    },

    productId : {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'product_id'
    }
    
});

module.exports = InCart;