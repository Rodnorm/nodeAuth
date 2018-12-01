'use strict'
const unirest = require('unirest');

exports.authenticate = async (req, res, next) => {

    try {

        unirest.post('http://localhost:8080/cliente/auth').header('Content-Type', 'application/json').send({
            "email": `${req.body.email}`,
            "senha": `${req.body.senha}`
        }).end((response) => {
            res.send(response.body);
        });

    } catch (e) {
        res.status(400).send({
            message: "Erro",
            data: e
        });
    }
}