const mongoose=require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/blg')


// model

const Blog=mongoose.model('Blog',{
    id:String,
    title:String,
    description:String,
    image:String
})

const Login=mongoose.model('Login',{
    name:String,
    email:String,
    password:String
})
module.exports={
    Blog,Login
}