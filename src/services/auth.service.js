'use strict'
const jwt = require('jsonwebtoken');

exports.generateToken  = async (data) => {
    return jwt.sign(data, global.SALT_KEY, {expiresIn: '1d'});
}

exports.authorize = (req, res, next) => {
    let token = req.body.token || req.query.token || req.headers['x-access-token'];

    if (!token) {
        res.status(401).json({
            message: 'Acesso restrito'
        });
    } else {
        jwt.verify(token, global.SALT_KEY, (error, decoded) => {
            if (error) {
                res.status(401).json({
                    message: 'Token inválido'
                });
            } else {
                next();
            }
        });
    }
}