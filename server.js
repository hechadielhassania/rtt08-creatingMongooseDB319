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



//  Routing

// we want to establish CRUD routes for our Notes Model

app.get('/', (req, res) => {
    res.send('This is a Landing page')
})

//Get all Notes
app.get('/notes', (req, res) => {

})

//Get a specific note by ID
app.get('/notes/:id',(req, res) => {
    
})

//Read //Create a note
app.post('/notes', (req, res) => {
    
})

//Update
app.put('/notes/:id',(req, res) => {
    
})

//Delete
app.delete('/notes/:id',(req, res) => {
    
})








app.listen(PORT, ()=>{
    console.log(`Express Server Listending on port num: ${PORT}`)
});