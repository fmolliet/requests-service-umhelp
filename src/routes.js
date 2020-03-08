
const { Router } = require('express');

const ordersRouter = require('./router')

const router = Router();

router.use('/orders', ordersRouter)

module.exports = router;
