'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller.orders');
const authService = require('../services/auth.service');

router.get('/:login', authService.authorize, controller.get);
router.post('/order/create', authService.authorize, controller.post);


module.exports = router;