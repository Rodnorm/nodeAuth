'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller.customer');
const authService = require('../services/auth.service');

router.post('/customer/authenticate', controller.authenticate);
router.get('/customer/:login', authService.authorize, controller.getUserDetails);


module.exports = router;