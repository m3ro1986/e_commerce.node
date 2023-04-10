const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
    
    const {token} = req.headers;

    if (!token) {
        return next(error)
    };

    try {
        const decoded = jwt.verify(token, 'password', { algorithms: "HS512"});
        req.user = decoded;
        next();
    } catch (error) {
        next(error);
    }
};

module.exports = authenticate;