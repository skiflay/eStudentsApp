const express = require('express')
const router = express.Router()
const stripe = require('stripe')("sk_test_51KJVb8CEren79YGTSbVjlPmFQDsduAlXHichQ3K8a3VSJtd6bc0nSCxYFBrxwngTKFhaKIIt0Ya682uEuFQ1V4sY003LxmKNH1")


router.post('/payment', (req, res)=>{
    stripe.charges.create({
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: 'usd'
    }, (stripeErr, stripeRes)=>{
        if(stripeErr){
            res.status(500).json(stripeErr)
        } else{
            res.status(200).json(stripeRes)
        }
    })
})


// router.get('/payment', (req, res)=>{
//     res.json('payments')
// })

module.exports = router