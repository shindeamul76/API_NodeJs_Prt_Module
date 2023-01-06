const router = require('express').Router();
const Customer = require('../models/Customer')

router.post('/customer', async (req, res) => {
    try {

        const customerIds = "CT" + Math.floor(Math.random()*500);

        const newCustomer = {
            customerId: customerIds,
            customername: req.body.customername,
            email: req.body.email,
            balance: req.body.balance,
        }

        
        
      
        const customer = await Customer.create(newCustomer)

        console.log(req.body.customername);
        console.log(req.body.email);
        console.log(req.body.balance);

       

        res.status(200).json({
            success: true,
            customer,
        })
        
    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        })
        
    }
})


router.get('/customer/:CustomerID', async (req, res) => {
    try {

        const {CustomerID} = req.params

        const getCustomer = await Customer.findOne({_id:CustomerID })

        if(!getCustomer) {
           return res.status(400).json({
            success: false,
            message: "Customer not exits",
           })
        }

        res.status(200).json({
            success: true,
            getCustomer,
        })
        
    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        })
        
    }
})

module.exports = router