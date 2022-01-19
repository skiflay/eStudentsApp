const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
const userRoute = require('./routes/user')
const productRoute = require('./routes/product')
const authRoute = require('./routes/auth')
const cartRoute = require('./routes/cart')
const orderRoute = require('./routes/order')
const paymentRoute = require('./routes/stripe')

const app = express();

dotenv.config()
mongoose.connect(process.env.MONGO_URL) 
.then(()=>console.log('DB connected!'))
.catch((err)=> console.log(err))

app.use(express.json())
app.use(cors())

app.use('/miu/auth', authRoute)
app.use('/miu/users', userRoute )
app.use('/miu/products', productRoute)
app.use('/miu/carts', cartRoute )
app.use('/miu/orders', orderRoute )
app.use('/miu/checkout', paymentRoute)

app.listen(5000, ()=>console.log('Server is linstening on port 5000'))
