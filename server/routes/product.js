const express = require('express')
const { verifyTokenANdAdmin } = require('./verifyToken')
const router = express.Router()
const Product = require('../models/Product')

//Create Product
router.post('/', verifyTokenANdAdmin, async (req, res)=>{
    const newProduct = new Product(req.body)
    try{
        const savedProduct = await newProduct.save()
        res.status(200).json(savedProduct)
    }catch(err){
        res.status(500).json(err)
    }
})

//Update
router.put('/:id', verifyTokenANdAdmin, async (req, res)=>{
    try{
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new: true})
        //console.log(req.body, req.params.id)
        res.status(200).json(updatedProduct)
    }catch(err){
        res.status(500).json(err)
    }
})

//Delete
router.delete('/:id', verifyTokenANdAdmin, async (req, res)=>{
    try{
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).json("Product has been deleted successfully!")
    }catch {
        res.status(500).json(err)
    }
})

//Get By ID
router.get('/:id', async (req, res)=>{
    try{
        const product = await Product.findById(req.params.id)
        res.status(200).json(product)
    }catch(err){
        res.status(500).json(err)
    }
})

//Get All Products
router.get('/',  async (req, res)=>{
    //getting latest new and by category
    const qNew = req.query.new
    const qCategory = req.query.category
    try{
        let products
        if(qNew){
            products = await Product.find().sort({createdAt: -1}).limit(5)
        } else if(qCategory){
            products = await Product.find({
                categories: {$in: [qCategory]}
            })
        } else {
            products = await Product.find()
        }
        res.status(200).json(products)
    }catch(err){
        res.status(500).json(err)
    }
})


module.exports = router