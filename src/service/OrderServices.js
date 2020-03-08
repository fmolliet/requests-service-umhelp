const Order = require("../model/Order");

class OrderService {
    indexOrder(){
        return Order.find()
    }

    showOrder(search){
        return Order.findOne(search);
    }

    postOrder(order){
        return Order.create(order)
    }

    patchOrder(order, updateData){
        return Order.updateOne(order,updateData);
    }

    putOrder(order){
        return Order.updateOne(order, { disable: true});
    }

    deleteOrder(order){
        return Order.deleteOne(order);
    }
}

module.exports = new OrderService();