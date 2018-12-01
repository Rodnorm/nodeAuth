'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller.customer');

router.post('/authenticate', controller.authenticate);
router.get('/customer', controller.getUserDetails);


module.exports = router;