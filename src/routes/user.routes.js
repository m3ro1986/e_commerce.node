const {Router} = require('express');
const { createUser, updateUser } = require('../controllers/user.controllers');
const { updateUserValidator, createUserValidator } = require('../validators/user.validators');
const router = Router();

router.post('/api/v1/user', createUserValidator, createUser);
router.put('/api/v1/user/:id', updateUserValidator, updateUser);

module.exports = router;