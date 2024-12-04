const express=require ('express')
const app=new express()

app.use(express.json())
const path=require('path')
const bookStore=require('./routes/bookStore')
app.use('/books',bookStore)

app.get('/',(req,res)=>{
    res.send("welcome to book store");
})




app.listen(3000,()=>{
    console.log("server is listening")
})