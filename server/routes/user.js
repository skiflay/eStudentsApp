const express = require('express')
const cryptoJS = require('crypto-js')
const User = require('../models/User')
const router = express.Router()
const {verifyToken, verifyTokenANdAuthorization} = require('./verifyToken')

//Update
router.put('/:id', verifyTokenANdAuthorization, async (req, res)=>{
    // if(req.user.id === req.params.id || req.user.isAdmin)
    if(req.body.password){
        req.body.password = cryptoJS.AES.encrypt(req.body.password, process.env.PWD_SECRET).toString()   
    }
    try{
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new: true})
        console.log(req.body, req.params.id)
        res.status(200).json(updatedUser)
    }catch(err){
        res.status(500).json(err)
    }
})


module.exports = router