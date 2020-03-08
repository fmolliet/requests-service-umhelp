const { Router } = require('express');

const orderController = require('./controllers/OrderController');

const routes = Router();

routes.get('/orders', orderController.index)
        .get('/orders/:orderId', orderController.show)
        .post('/orders', orderController.store)
        .put('/orders/:orderId', orderController.update)
        .delete('orders/:orderId', orderController.destroy)

module.exports = routes;