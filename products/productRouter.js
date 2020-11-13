const router = require('express').Router()

const Product = require('./productModel')

const currentTime = new Date().toDateString()

// @desc		Test end is working
// @route		GET /test
router.get('/test', (req, res) => {
    res.status(202).json({message: 'the server is running at ' + currentTime})
})

router.get('/', (req,res)=>{ 
    res.status(200).json({api: "running"})
 })

module.exports = router