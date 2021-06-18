const express=require('express')
const router=express.Router()
const Post=require('../models/Post')

router.get('/',async(req,res)=>{
   try{
       const posts=await Post.find();
       res.json(posts)
   }catch(err){
       res.status(400).send('error',err)
   }
})

router.post('/',async(req,res)=>{

    const post=new Post({
        title:req.body.title,
        description:req.body.description,
    })
    try{
        const savePost= await post.save()
        res.send(savePost)
    }catch(err){
        res.status(400).send(err)
    }
})

module.exports=router