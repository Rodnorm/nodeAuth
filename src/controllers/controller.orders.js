'use strict'
const unirest = require('unirest');
const Request = require('request');

exports.get = async (req, res, next) => {

    try {
        try {

            Request.get(`${global.API_ENDPOINT}pedido/history/${req.params.login}`, { json: true },
                async (req, response, next) => {
                    res.send(response.body);
                });

        } catch (e) {
            console.log(e);
        }

    } catch (e) {
        res.status(400).send({
            message: "Erro",
            data: e
        });
    }
}

exports.post = async (req, res, next) => {
    try {
        try {
            unirest.post(`${global.API_ENDPOINT}pedido/save`).header('Content-Type', 'application/json')
                .send(req.body)
                .end(async (response) => {
                    res.send(response);
                });
        } catch (err) {
            console.error(err);    
        }
    } catch (e) {
        console.error(e);

    }
}