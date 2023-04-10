const { check } = require('express-validator');
const validateResult = require('../utils/validate');

const createUserValidator = [
    check('username', 'error in username field')
        .exists().withMessage('username does not exist')
        .isLength({ min: 5, max: 30 }).withMessage('username must be beetween 5 and 30 characters')
        .isString().withMessage('username must be string'),
    check('email', 'error in email field')
        .exists().withMessage('email does not exist')
        .isEmail().withMessage('must be a email')
        .isLength({ min: 7, max: 50}).withMessage('email must be beetween 7 and 50 characters')
        .isString().withMessage('email must be string'),
    check('password', 'error in password field')
        .exists().withMessage('password does not exist')
        .notEmpty().withMessage('password is empty'),
    check('avatar', 'error in avatar field')
        .exists().withMessage('avatar does not exist')
        .notEmpty().withMessage('avatar is empty')
        .isURL().withMessage('avatar must be a URL'),
    (req, res, next) => {
        validateResult(req, res, next);
    }  
];

const updateUserValidator = [
    check('username', 'error in username field')
        .exists().withMessage('username does not exist')
        .isLength({ min: 5, max: 30 }).withMessage('username must be beetween 5 and 30 characters')
        .isString().withMessage('username must be string'),
    check('avatar', 'error in avatar field')
        .exists().withMessage('avatar does not exist')
        .notEmpty().withMessage('avatar is empty')
        .isURL().withMessage('avatar must be a URL'),    
    (req, res, next) => {
        validateResult(req, res, next);
    }  
];

const loginUserValidator = [
    check('email', 'error in email field')
        .exists().withMessage('email does not exist')
        .isEmail().withMessage('must be a email')
        .isLength({ min: 7, max: 50}).withMessage('email must be beetween 7 and 50 characters')
        .isString().withMessage('email must be string'),
    check('password', 'error in password field')
        .exists().withMessage('password does not exist')
        .notEmpty().withMessage('password is empty'),
    (req, res, next) => {
        validateResult(req, res, next);
    }  
];

module.exports = { createUserValidator, updateUserValidator, loginUserValidator };