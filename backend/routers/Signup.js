const express =require('express')
const SignupModel =require('../models/SignupModel')
const bodyParser = require('body-parser')
const router=express.Router()
router.use(bodyParser.json())

router.get('/',(req,res)=>{
    res.send('signup page')
})

router.post('/post',(req,res)=>{
    console.log( req.body)
    const newuser =new SignupModel(req.body)
    newuser.save()
    .then(response=>console.log(response))
    .catch(err=>console.log(err))
    res.send('signup posting page')
})

router.get('/get/:email',(req,res)=>{
    console.log(req.params.email)
    SignupModel.find({email:req.params.email})
    .then(response=>res.send(response))
    
    .catch(err=>console.log(err))
})


module.exports=router;
