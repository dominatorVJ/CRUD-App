const mongoose =require("mongoose")
const dotenv=require("dotenv")
dotenv.config();

const {DBHOST}= process.env;

const URI = DBHOST;
const connectDB = async ()=>{
    await mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true }) 
    console.log("db connected")
}

module.exports = connectDB
