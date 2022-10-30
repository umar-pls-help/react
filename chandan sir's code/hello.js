const express=require('express')
const app=express()
const port=3000
app.get('/',(req,res)=>{
res.send('hello world')
})
app.get('/hello1',(req,res)=>{
    res.send('hello world 1')
    })

app.get('/hello2',(req,res)=>{
        res.send('hello world 2')
        })
app.post('/about',(req,res)=>{
res.send('This is VCET from POST')
})

app.get('/about',(req,res)=>{
    res.send('This is VCET from GET')
    })
app.listen(port,()=>{
console.log('app listening on port 3000')
})