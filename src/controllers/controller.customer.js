'use strict'
const unirest = require('unirest');
const Request = require('request');

const authService = require('../services/auth.service');

exports.authenticate = async (req, res, next) => {

    try {
        unirest.post('http://localhost:8080/cliente/auth').header('Content-Type', 'application/json').send({
            "login": `${req.body.login}`,
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
exports.getUserDetails = async (req, res, next) => {

    try {
        Request.get(`http://localhost:8080/cliente/cliente/${req.body.email}`, { json: true },
            async (req, response, next) => {
                console.log(response.body);
                const token = await authService.generateToken({
                    id: response.body.data[0].idCliente,
                    email: response.body.data[0].email,
                    name: response.body.data[0].nome
                });
                res.send({
                    data:
                    {
                        email: response.body.data[0].email,
                        name: response.body.data[0].nome,
                        token: token
                        
                    }
                });

            });
    } catch (e) {
        res.status(400).send({
            message: "Erro",
            data: e
        });
    }
}