'use strict'
const jwt = require('jsonwebtoken');


exports.generateToken  = async (data) => {
    return jwt.sign(data, global.SALT_KEY, {expiresIn: '1d'});
}