const express=require('express')

const app=express()
const cors=require('cors')

const logic=require('./server/logic')
app.use(cors({origin:'http://localhost:3000'}))

app.use(express.json())


// all blogs
app.get('/getAllBlog',(req,res)=>{
    logic.allBlog().then(result=>{
        res.status(result.statusCode).json(result)
    })
})

// delete blog
app.delete('/deleteBlog/:id',(req,res)=>{
    logic.removeBlog(req.params.id).then(result=>{
        res.status(result.statusCode).json(result)
    })
})
// add new blog

app.post('/addBlog',(req,res)=>{
    logic.addBlog(req.body.id,req.body.title,req.body.description,req.body.image).then(result=>{
        res.status(result.statusCode).json(result)
    })
})
// get a blog

app.get('/getBlog/:id',(req,res)=>{
    logic.getBlog(req.params.id).then(result=>{
        res.status(result.statusCode).json(result)
  
    })
})
// update blog

app.post('/updateBlog',(req,res)=>{
    logic.updateBlog(req.body.id,req.body.title,req.body.description,req.body.image).then(result=>{
        res.status(result.statusCode).json(result)
  
    })
})

app.post('/login',(req,res)=>{
    logic.Login(req.body.name,req.body.email,req.body.password).then(result=>{
        res.status(result.statusCode).json(result)
  
    })
})


app.listen(8000,()=>{
    console.log("server started at 8000");
})
