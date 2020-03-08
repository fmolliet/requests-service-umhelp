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

    putOrder(order, updateData){
        return Order.update(order,updateData);
    }

    deleteOrder(order){
        return Order.deleteOne(order);
    }
}

module.exports = new OrderService();