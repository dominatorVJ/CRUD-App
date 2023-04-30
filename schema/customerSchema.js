const Mongoose = require("mongoose")
const {Schema,model}=Mongoose

const customer = new Schema({
    Name:{
        type:String,
        required:true,
    },
    Email:{
        type:String,
        required:true
    },
    Id:{type:Number,required:true},
    Mobile:{type:Number,required:true},
    Password:{type:String,required:true},
    Date:{type:Date, default:Date.now},
})

module.exports = Customer = model("Customer",customer)