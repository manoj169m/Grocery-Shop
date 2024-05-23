const express= require('express')
const ProductModel =require('../models/ProductsModel')
const bodyParser = require('body-parser')
const router= express.Router()
router.use(bodyParser.json())


router.get('/',(req,res)=>{
    res.send('products page')
})


router.post('/post', (req, res) => {
    console.log(req.body); 
    const newProduct = new ProductModel(req.body); 
    newProduct.save()
        .then(response => {
            console.log(response);
            res.status(201).json(response)
        })
        .catch(err => {
            console.log(err);
            res.status(400).json({ message: err.message })
        });
});

router.get('/get/:itemType',(req,res)=>{
    console.log(req.params.itemType)
      ProductModel.find({ItemType: req.params.itemType})
    .then(products=>{
        console.log(products)
        res.status(201).json(products)
})
.catch(err=>{
    console.log(err)
    res.status(400).json({message:err.message})
})
})

module.exports=router;