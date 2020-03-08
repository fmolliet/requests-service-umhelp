const { Schema, model, ObjectId } = require("mongoose");

const OrdersSchema = new Schema({
    id_requester: ObjectId,
    date: { 
        type: Date,
         default: Date.now
    },
    duration: { 
        type: Number,
         required: true
    },
})

module.exports = model("Orders", OrdersSchema);