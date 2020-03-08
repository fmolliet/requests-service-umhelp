const mongoose = require('mongoose');

const OrdersSchema = new mongoose.Schema({
    id_requester: mongoose.ObjectId,
    date: { type: Date, default: Date.now },
    duration: Number,
})

module.exports = mongoose.model('Orders', OrdersSchema);