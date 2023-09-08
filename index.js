import express from "express";
const app = express();
const port = 3000;

app.get('/',(req,res)=>{
    res.send("<h1>Home Page</h>")
})

app.get('/contact',(req,res)=>{
    res.send("contact number: 1234567890")
})

app.get('/about',(req,res)=>{
    res.send("<h1>About meee</h1><p>I am Pratika</p><p>I am learning backend</p>")
})

app.post('/register',(req,res)=>{
    res.sendStatus(201)
})

app.put('/user/pratika',(req,res)=>{
    res.sendStatus(200)
})

app.patch('/user/pratika',(req,res)=>{
    res.sendStatus(200)
})

app.delete('/user/pratika',(req,res)=>{
    res.sendStatus(200)
})

app.listen(port,()=>{
    console.log(`Server is listening to ${port}`)
})