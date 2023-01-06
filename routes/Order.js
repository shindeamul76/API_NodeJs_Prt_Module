const router = require('express').Router();
const Order = require('../models/Order')

router.post('/order', async (req, res) => {
    try {

        const newOrder = {
            quantity: req.body.quantity,
        }

        const order = await Order.create(newOrder)

        res.status(200).json({
            success: true,
            order,
        })
        
    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        })
        
    }
})

router.get('/order/:OrderID', async (req, res) => {
    try {

        const {OrderID} = req.params

        const getOrder = await Order.findOne({_id:OrderID })

        if(!getOrder) {
           return res.status(400).json({
            success: false,
            message: "Order not exits",
           })
        }

        res.status(200).json({
            success: true,
            getOrder,
        })
        
    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        })
        
    }
})


router.put('/email/costOfAnOrder', async (req, res) => {
    try {

        const UpdateOrder = await Product.findOne({email: req.body.email})


        const newBalnce = UpdateOrder.update({
            $set:{balance: req.body.balance}
        })

             
        
        if(!UpdateProduct) {
           return res.status(400).json({
            success: false,
            message: "Orders not exits",
           })
        }

        res.status(200).json({
            success: true,
            newBalnce,
        })
        
    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        })
        
    }
})

module.exports = router