const express = require('express')
const router = express.Router()
const Order = require('../models/Order')
const { verifyTokenANdAdmin, verifyToken, verifyTokenANdAuthorization } = require('./verifyToken')

//Create Product
router.post('/', verifyToken, async (req, res)=>{
    const newOrder = new Order(req.body)
    try{
        const savedOrder = await newOrder.save()
        res.status(200).json(savedOrder)
    }catch(err){
        res.status(500).json(err)
    }
})

//Update
router.put('/:id', verifyTokenANdAdmin, async (req, res)=>{
    try{
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new: true})
        //console.log(req.body, req.params.id)
        res.status(200).json(updatedOrder)
    }catch(err){
        res.status(500).json(err)
    }
})

//Delete
router.delete('/:id', verifyTokenANdAdmin, async (req, res)=>{
    try{
        await Order.findByIdAndDelete(req.params.id)
        res.status(200).json("Order has been deleted successfully!")
    }catch {
        res.status(500).json(err)
    }
})

//Get User Cart
router.get('/:userId', verifyTokenANdAuthorization, async (req, res)=>{
    try{
        const order = await Order.find({userId: req.params.userId})
        res.status(200).json(order)
    }catch(err){
        res.status(500).json(err)
    }
})

//Get All 
router.get('/', verifyTokenANdAdmin, async (req, res)=>{
   try{
    const orders = await Order.find()
    res.status(200).json(orders)
   }catch(err){
    res.status(500).json(err)
   }
})

//Get income if needed (dashboard)

module.exports = router