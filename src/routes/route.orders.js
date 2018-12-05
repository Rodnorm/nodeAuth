'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller.orders');
const authService = require('../services/auth.service');

router.post('/:login', authService.authorize, controller.postGetOrdersByEmail);
router.post('/order/create', authService.authorize, controller.postCreate);


module.exports = router;