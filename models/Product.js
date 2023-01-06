const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({

    productId: {type: String},
    product_type:{type: String},
    product_name: {type: String},
    product_price: {type: Number},
    available_quantity: {type:Number},
}, {timestamps:true})

module.exports = mongoose.model('Product', ProductSchema);