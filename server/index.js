const express = require('express');
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const userRoute = require('./routes/user')
const authRoute = require('./routes/auth')

const app = express();

dotenv.config()
mongoose.connect(process.env.MONGO_URL) 
.then(()=>console.log('DB connected!'))
.catch((err)=> console.log(err))

app.use(express.json())

app.use('/miu/auth', authRoute)
app.use('/miu/users', userRoute )


app.listen(5000, ()=>console.log('Server is linstening on port 5000'))
