const userServices = require("../services/user.services");
const bcrypt = require('bcrypt');
const transporter = require("../utils/mailer");

const createUser = async (req, res, next) => {
    try {
        const user = req.body;
        const newUser = await userServices.create(user);
        res.json(newUser);
        await transporter.sendMail({
            from: "lgarciaz3005@gmail.com",
            to: "lgarciaz3005@gmail.com",
            subject: "prueba de correos",
            text: 'hola mundo'
        });
    } catch (error) {
        next(error);
    }
};

const loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await userServices.getUser(email);
        if(!user) { return next(error) };
        const authenticated = await bcrypt.compare( password, user.password );
        if(!authenticated) { return next(error) };

        const token = userServices.genToken({ email });

        res.json({ email, token });
    } catch (error) {
        next(error)
    }
}

const updateUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { username, avatar } = req.body;
        await userServices.update(id, { username, avatar });
        res.status(202).json(`user ${id} successfully modified`)
    } catch (error) {
        next(error)
    }
}

module.exports = { createUser, loginUser, updateUser }; 

