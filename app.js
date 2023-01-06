const express = require('express');
const app = express();
const connectDB = require('./database/connect');
require('dotenv').config();

const CreateProduct = require('./routes/Product');
const createCustomer = require('./routes/Customer');
const createOrder = require('./routes/Order');

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/v1', CreateProduct);
app.use('/api/v1', createCustomer);
app.use('/api/v1', createOrder);




const start = async  () => {

    try {

        await connectDB(process.env.MONGO_URI)
        app.listen(process.env.PORT, ()=> console.log(`connected server to the ${process.env.PORT}....`))
        
    } catch (error) {

        console.log(error)
        
    }
}

start();

