const express = require("express")
const cors = require("cors")
const connectDB = require("./db/connection")
const app = express()

connectDB()
app.use(cors())
app.use(express.json())

app.use("/Api/customers/",require("./api/customer"))

const Port = process.env.PORT || 5000;
app.listen(Port,()=>console.log(`Listening at port ${Port}`))