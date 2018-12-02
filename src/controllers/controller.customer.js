'use strict'
const unirest = require('unirest');
const Request = require('request');

const authService = require('../services/auth.service');

exports.authenticate = async (req, res, next) => {

    try {
        unirest.post(`${global.API_ENDPOINT}cliente/auth`).header('Content-Type', 'application/json').send({
            "login": `${req.body.login}`,
            "senha": `${req.body.senha}`
        }).end(async (response) => {

            const token = await authService.generateToken({login: req.body.login});
            res.send({
                data:
                {
                    login: req.body.login,
                    token: token
                },
                server: response.body
            });
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
        Request.get(`${global.API_ENDPOINT}cliente/cliente/${req.params.login}`, { json: true },
            async (req, response, next) => {
               res.send(response.body);
            });
    } catch (e) {
        res.status(400).send({
            message: "Erro",
            data: e
        });
    }
}