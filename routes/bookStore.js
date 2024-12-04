const express=require('express')
const router=express.Router()
const books=require('../bokk')



router.get('/',(req,res)=>{
    try {
        console.log("hi")
        res.status(200).json(books)
        
    } catch (error) {
        res.status(404).json({error:error.message})
        
    }
})


router.get('/:id',(req,res)=>{
    try {
        const bookId=parseInt(req.params.id)
        const book=books.find(b=>b.id==bookId)
        if(!book)
        {
            res.status(404).json({error:"book not found"})
        }
        res.status(200).json(book)
        
    } catch (error) {
        res.status(200).json({error:error.message})
        
    }
})

module.exports=router