const { Router } = require('express');
const { userController } = require('../controllers/user.controller');
const authMiddleware = require('../middlewaries/auth.middleware');

const router = Router();


router.get('/users', userController.getUser)
router.post('/users', userController.addUser)
router.post('/login', userController.login)

module.exports = router