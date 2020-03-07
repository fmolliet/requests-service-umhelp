const axios = require('axios');

const Request = require('../models/Request');

module.exports = {
    async index(request, response){
        const orders = await orders.find();

        return response.json(orders);
    },

    async store(request, response){
        const { id_requester, date, duration, discount } = request.body;

        //let request = await Request.findOne({ id_requester });
        // Necessario verificar se foi aplicado disconto (Se foi consulta o outro servico)
        if( discount ){
            const apiResponse = await axios.get(`${process.env.DISC_HOST}:${process.env.DISC_PORT}/discounts/${discount}`)
            // retorno
            const {  } = apiResponse.data;

        }

    },

    async update() {

    }
}