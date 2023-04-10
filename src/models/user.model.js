const { DataTypes } = require('sequelize');
const database = require('../utils/connection');
const bcrypt = require('bcrypt');

const User = database.define('users', {

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    username: {
        type: DataTypes.STRING(30),
        allowNull: false,
        unique: true
    },

    email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false
    },

    avatar: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'avatar.com'
    }

},{
    hooks:  {
        beforeCreate: async (user) => {
            try {
                const salt = await bcrypt.genSalt(10);
                const passhashed = await bcrypt.hash( user.password, salt );
                user.password = passhashed;
            } catch (error) {
                throw error
            }
        }
    }
});

module.exports = User;
