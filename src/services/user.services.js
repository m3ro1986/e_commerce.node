const Cart = require("../models/cart.model");
const User = require("../models/user.model");
const jwt = require('jsonwebtoken');

class userServices {
    static async create(user) {
        try {
            const newUser = await User.create(user);
            await Cart.create({userId: newUser.id});
            return newUser;
        } catch (error) {
            throw error;   
        }
    }

    static async getUser(email) {
        try {
            const user = await User.findOne({ where: {email} });
            return user;
        } catch (error) {
            throw error
        }
    }

    static genToken(data) {
        try {
            const token = jwt.sign( data, 'password', {
                algorithm: 'HS512',
                expiresIn: '1d'
            });
            return token;
        } catch (error) {
            throw error
        }
    }

    static async update(id, body) {
        try {
            const user = await User.update(body, { where: {id} });
            return user;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = userServices;