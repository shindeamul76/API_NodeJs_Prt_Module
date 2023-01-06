const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({

   products: [
     {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
     },
    ],
    customers: [{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Customer",
    },],
    
    quantity: {type: Number},
})

module.exports = mongoose.model('Order', OrderSchema);