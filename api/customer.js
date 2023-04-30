const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
const CustomerModel = require("../schema/customerSchema")

router.post("/",async(req,res)=>{
    let cust = req.body
    let newCustomer= new CustomerModel(cust)
    await newCustomer.save();
    res.send(newCustomer);
}) 

router.get("/",async (req,res)=>{
    let customers = await CustomerModel.find()
    res.send(customers)
})

router.get("/:id",async (req,res)=>{
    let customer  = await CustomerModel.find({Id:req.params.id})

    // const customer = await customers.find(c =>c.Id===req.params.id)
    if(!customer) return res.status(404).send("No customer with such Id")
    res.send(customer);
})

router.put("/:id",async (req,res)=>{
    let customer = await CustomerModel.updateOne({Id:req.params.id},{
        $set:req.body
    })
    // const customer = await customers.find(c =>c.Id===req.params.id)
    // if(!customer) return res.status(404).send("No customer with such Id")
    // console.log()
    res.send(customer);
})

router.delete("/:id",async (req,res)=>{
    const customer = await CustomerModel.deleteMany({Id:req.params.id})
    res.send(customer);
})


module.exports = router