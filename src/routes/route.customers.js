'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller.customer');
const authService = require('../services/auth.service');

router.post('/customer/authenticate', controller.authenticate);
router.post('/customer/create', controller.postCustomer);
router.get('/customer/:login', authService.authorize, controller.getUserDetails);
router.post('/session/', authService.session);

module.exports = router;