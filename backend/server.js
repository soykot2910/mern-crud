const express =require('express')
const mongoose=require('mongoose')

const app=express()
const port=4000


//middleware
app.use(express.json())

mongoose.connect('mongodb://localhost/merncurd',{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log('mongod connected successfully'))
.catch((err)=>console.log('mondb error',err))


app.get('/',(req,res)=>{
    res.json({message:'helo'})
})

//routing
const postRoute=require('./routers/post')

app.use('/post',postRoute)

app.listen(port,()=>{
    console.log(`Server is running on port: ${port}`)
})