const express=require('express')
const app=express()
const port=3000

app.get('/',(req,res)=>{
res.send('hello world')
})


app.post('/about',(req,res)=>{
res.send('This is VCET')
})

app.listen(port,()=>{
console.log('app listening on port 3000')
}) 