const router = require('express').Router();
const Product = require('../models/Product');


router.post('/product', async (req, res) => {
    try {

        const niceproductId = "PRD" + Math.floor(Math.random()*500)
        const newProduct = {
            productId: niceproductId,
            product_type: req.body.product_type,
            product_name: req.body.product_name,
            product_price: req.body.product_price,
            available_quantity: req.body.available_quantity,
        }

       

        const product = await Product.create(newProduct)

        res.status(200).json({
            success: true,
            product,
        })
        
    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        })
        
    }
})

router.get('/product/:productID', async (req, res) => {
    try {

        const {productID} = req.params

        const getProduct = await Product.findOne({_id:productID })

        if(!getProduct) {
           return res.status(400).json({
            success: false,
            message: "Product not exits",
           })
        }

        res.status(200).json({
            success: true,
            getProduct,
        })
        
    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        })
        
    }
})


router.put('/productName/availableQuantity/:productID', async (req, res) => {
    try {

        const UpdateProduct = await Product.findByIdAndUpdate(req.params._id,{$set: req.body}, {new: true})

             
        
        if(!UpdateProduct) {
           return res.status(400).json({
            success: false,
            message: "Product not exits",
           })
        }

        res.status(200).json({
            success: true,
            UpdateProduct,
        })
        
    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        })
        
    }
})

module.exports = router


