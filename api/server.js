const express = require('express');
const helmet = require('helmet');
const CarsRouter = require('../cars/cars-router');
const SalesRouter = require('../sales/sales-router.js')
const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/cars', CarsRouter);
server.use('/api/sales', SalesRouter)

module.exports = server;