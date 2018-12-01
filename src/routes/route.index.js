'use strict'

const express = require('express');
const router = express.Router();
const Request = require('request');

router.get('/', async (req, res, next) => {

    res.status(200).send({
        title: 'Node API do Rodrigo',
        version: '0.0.1',
        r: resp
    })

});

module.exports = router;