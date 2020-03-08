const axios = require('axios');

const Order = require('../models/Order');

module.exports = {
    async index(request, response){
        const orders = await Order.find();

        return response.json(orders);
    },

    async store(request, response){
        const { id_requester, date, duration, discount } = request.body;

        //let request = await Request.findOne({ id_requester });
        // Necessario verificar se foi aplicado disconto (Se foi consulta o outro servico)
        /*
        if( discount ){
            const apiResponse = await axios.get(`${process.env.DISC_HOST}:${process.env.DISC_PORT}/discounts/${discount}`)
            // retorno
            const {  } = apiResponse.data;

        }
        */

       order = await Order.create({
            id_requester,
            date,
            duration
        });

        return response.json(order);

    },

    async update() {

    },

    async show() {

    },

    async destroy() {

    }

}