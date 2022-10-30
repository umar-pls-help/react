const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config()

const app = express()
const port = 5000

app.use(cors())  //Middleware 
app.use(express.json())
app.use(express.urlencoded())


//const uri = "mongodb+srv://anish:1234@firstcluster.hnsxgmy.mongodb.net/testip?retryWrites=true&w=majority"

const uri = process.env.ATLAS_URI
mongoose.connect(uri,
    {
        useNewUrlParser:true, 
        useUnifiedTopology:true
    })

const connection = mongoose.connection
connection.once('open', () => {
    console.log("MongoDB connection established successfully")
})

const demoRouter = require('./routes/demo')
app.use('/demo',demoRouter)




app.get('/', (req, res) => {
    res.send("My API")
})


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})


