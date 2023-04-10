const { check } = require('express-validator');
const validateResult = require('../utils/validate');

const createProductValidator = [
    check('name', 'error in name field')
        .exists().withMessage('name does not exist')
        .isString().withMessage('name must be a string')
        .isLength({ min: 5, max: 30}).withMessage('name must be beetween 5 and 30 characters'),
    check('description', 'error in description field')
        .exists().withMessage('description does not exist')
        .isString().withMessage('description mus be a string'),
    check('price', 'error in price field')
        .exists().withMessage('price does not exist')
        .isFloat().withMessage('price must be float'),
    check('quantity', 'error in quantity field')
        .exists().withMessage('error in quantity field')
        .isInt().withMessage('quantity must be integer'),
    check('image', 'error in image field')
        .exists().withMessage('image does not exist')
        .isURL().withMessage('image must be a URL'),
    check('userId', 'error in userId field')
        .exists().withMessage('userId does not exist')
        .isInt().withMessage('userId must be integer'),
    (req, res, next) => {
        validateResult(req, res, next);
    }  
];

const updateProductValidator = [
    check('description', 'error in description field')
        .exists().withMessage('description does not exist')
        .notEmpty().withMessage('description must not be emtpy')
        .isString().withMessage('description must be a string'),
    (req, res, next) => {
        validateResult(req, res, next);
    }         
]   

module.exports = {createProductValidator, updateProductValidator};