const { indexOrder, showOrder, postOrder, putOrder, deleteOrder } = require("../service/OrderServices");

class OrdersController {
    async index(req, res){
        try {
            const orders = await indexOrder();
            return res.status(200).json(orders);
        }catch (err) {
            return res.status(400).json(err);
        }
    }

    async show(req, res){
        try {
            const order = await showOrder(req.query);
            return res.status(200).json(order);
        }catch (err) {
            return res.status(400).json(err);
        }
    }

    async store(req, res){
        try {
            const order = await postOrder(req.body);
            return res.status(200).json(order);
        } catch (err) {
            return res.status(400).json(err);
        }
    }

    async update(req, res){
        try {
          const order = await putOrder(req.query,req.body);
          return res.status(200).json(order);
        } catch (err) {
          return res.status(400).json(err);
        }
    }

    async destroy(req, res){
        try {
          const order = await deleteOrder(req.query);
          return res.status(200).json(order);
        } catch (err) {
          return res.status(400).json(err);
        }
    }
}

module.exports = new OrdersController();