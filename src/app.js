'use strict'

const index = require('./routes/route.index');
const customers = require('./routes/route.customers');
const products = require('./routes/route.products');
const users = require('./routes/route.users');
const orders = require('./routes/route.orders');

const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const router = express.Router();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.json({
    limit: '5mb'
}));

app.use(bodyParser.urlencoded({ extended: false }))

app.use((req, res, next) => {
    res.header('Acces-Control-Allow-Origin', '*');
    res.header('Acces-Control-Allow-Headers', 'Origin, X-Requested-Width, Content-Type, Accept, x-access-token');
    res.header('Acces-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', index);
app.use('/customers', customers);
app.use('/products', products);
app.use('/user', users);
app.use('/orders', orders);

module.exports = app;