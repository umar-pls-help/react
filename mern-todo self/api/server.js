const express = require('express')
const mongoose = require('mongoose')
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://anish:1234@firstcluster.hnsxgmy.mongodb.net/d12?retryWrites=true&w=majority", {
    useNewUrlParser:true, 
    useUnifiedTopology:true
})
    .then(() => console.log("Connected To DB"))
    .catch(console.error)


const Todo = require("./models/Todo")

app.get('/todo', async (req, res) => {
    const todos = await Todo.find()
    res.json(todos)
})




app.listen(5000, () => console.log("Server started on 5000"))