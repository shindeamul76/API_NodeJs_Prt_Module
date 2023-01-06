const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({

    customerId: {type: String, require: true},
    customername: {type: String},
    email: {type: String, unique: true},
    balance: {type: Number},
},{timestamps:true})

module.exports = mongoose.model('Customer', CustomerSchema);