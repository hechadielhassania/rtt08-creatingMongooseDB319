require("dotenv").config()
// --------------> allows the {.env} file
const express = require("express");
const app = express()
const PORT = process.env.PORT || 3000
const connectToDb = require("./config/connectToDb")
// This pulls our Mongoose connection into application
connectToDb()
// This initializes our connectToDb() function
const cors = require("cors"); 
// ------------- Recieving reqs on cross-origins **
app.use(express.json())
// Express doesn't naturally convert our data to json
app.use(cors())













app.listen(PORT, ()=>{
    console.log(`Express Server Listending on port num: ${PORT}`)
});