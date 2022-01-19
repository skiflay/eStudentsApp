const express = require('express')
const router = express.Router()
const cryptoJS = require('crypto-js')
const jwt = require('jsonwebtoken')
const User = require('../models/User')

//Register
router.post("/register", async (req, res)=>{
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: cryptoJS.AES.encrypt(req.body.password, process.env.PWD_SECRET).toString()
    });
    try{
        const savedUser = await newUser.save()
        res.status(200).json(savedUser)
        // console.log(savedUser)
    } catch(err){
        res.status(500).json(err)
    }
})

// Login
router.post('/login', async (req, res)=>{
    try{
        const user = await User.findOne({username: req.body.username})
        !user && res.status(401).json('Wrong Credentials!');

        // Token
        const accessToken = jwt.sign(
            {
            id: user._id,
            isAdmin: user.isAdmin
        }, 
        process.env.JWT_SECRET, {expiresIn: "3d"}
        )
        //Decrypt PWD
        const hashedPwd = cryptoJS.AES.decrypt(user.password, process.env.PWD_SECRET)
        const password = hashedPwd.toString(cryptoJS.enc.Utf8)
        console.log(password)

        password !== req.body.password && res.status(401).json('Wrong Credentials!')
        res.status(200).json({...user._doc, accessToken})
    }catch(err){
       console.log(err)
    }
})


module.exports = router