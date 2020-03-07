const { Router } = require('express');

const requestController = require('./controllers/RequestController');

const routes = Router();

routes.get('/orders', requestController.index)

module.exports = routes;