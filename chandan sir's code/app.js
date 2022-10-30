const express=require('express')
const app=express()
const port=3000
const birds = require('./birds')
const hey = require('./hey.js')









app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`)

    })
    
app.use('/birds', birds)
app.use('/hey', hey)