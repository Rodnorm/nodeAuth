'use strict'

const repository = require('../repository/repository.products');
const Request = require('request');

exports.get = async (req, res, next) => {

    try {
        Request.get('http://localhost:8080/produto/list-produto', { json: true },
            (req, response, next) => res.send({message: 'success', data: response.body.data}));

    } catch (e) {
        res.status(400).send({
            message: "Erro",
            data: e
        });
    }
}