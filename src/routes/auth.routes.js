const {Router} = require('express');
const { loginUser } = require('../controllers/user.controllers');
const { loginUserValidator } = require('../validators/user.validators');
const router = Router();

router.post('/api/v1/auth/login', loginUserValidator, loginUser);

module.exports = router;