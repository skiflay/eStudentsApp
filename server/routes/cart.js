const express = require('express')
const { verifyToken, verifyTokenANdAuthorization, verifyTokenANdAdmin } = require('./verifyToken')
const router = express.Router()
const Cart = require('../models/Cart')

//Create Product
router.post('/', verifyToken, async (req, res)=>{
    const newCart = new Cart(req.body)
    try{
        const savedCart = await newCart.save()
        res.status(200).json(savedCart)
    }catch(err){
        res.status(500).json(err)
    }
})

//Update
router.put('/:id', verifyToken, async (req, res)=>{
    try{
        const updatedCart = await Cart.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new: true})
        //console.log(req.body, req.params.id)
        res.status(200).json(updatedCart)
    }catch(err){
        res.status(500).json(err)
    }
})

//Delete
router.delete('/:id', verifyTokenANdAuthorization, async (req, res)=>{
    try{
        await Cart.findByIdAndDelete(req.params.id)
        res.status(200).json("Cart has been deleted successfully!")
    }catch {
        res.status(500).json(err)
    }
})

//Get User Cart
router.get('/:userId', verifyTokenANdAuthorization, async (req, res)=>{
    try{
        const cart = await Cart.find({userId: req.params.userId})
        res.status(200).json(cart)
    }catch(err){
        res.status(500).json(err)
    }
})

//Get All 
router.get('/', verifyTokenANdAdmin, async (req, res)=>{
   try{
    const carts = await Cart.find()
    res.status(200).json(carts)
   }catch(err){
    res.status(500).json(err)
   }
})


module.exports = router