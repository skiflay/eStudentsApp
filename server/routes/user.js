const express = require('express')
const cryptoJS = require('crypto-js')
const User = require('../models/User')
const router = express.Router()
const {verifyToken, verifyTokenANdAuthorization, verifyTokenANdAdmin} = require('./verifyToken')

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

//Delete
router.delete('/:id', verifyTokenANdAuthorization, async (req, res)=>{
    try{
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("User has been deleted successfully!")
    }catch {
        res.status(500).json(err)
    }
})

//Get By ID
router.get('/:id', verifyTokenANdAdmin, async (req, res)=>{
    try{
        const user = await User.findById(req.params.id)
        res.status(200).json(user)
    }catch(err){
        res.status(500).json(err)
    }
})

//Get All Users
router.get('/', verifyTokenANdAdmin, async (req, res)=>{
    //getting latest new
    const query = req.query.new
    try{
        const users = query ? await User.find().sort({_id: -1}).limit(3)
                            : await User.find()
        res.status(200).json(users)
    }catch(err){
        res.status(500).json(err)
    }
})

//Get Stats if needed (dashboard)


module.exports = router