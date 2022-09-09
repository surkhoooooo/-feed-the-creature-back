const { Router } = require('express');
const { functionalController } = require('../controllers/functional.controller');
const fileMulter = require('../multer/multer')

const router = Router();


router.get('/func',  functionalController.getFunctional)
router.post('/func', fileMulter.single('avatar'), functionalController.addFunctional)


module.exports = router