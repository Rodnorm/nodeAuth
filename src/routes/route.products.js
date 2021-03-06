'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller.products');

router.get('/', controller.get);
router.get('/search/:name', controller.getByName);



module.exports = router;