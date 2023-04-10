const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "lgarciaz3005@gmail.com",
        pass: "elgkhnwktfhoujiw"
    }
});

module.exports = transporter;
