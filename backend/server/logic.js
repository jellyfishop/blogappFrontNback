const e = require('express')
const db=require('./db')

const allBlog=()=>{
    return db.Blog.find().then(result=>{
        if(result){
            return{
                statusCode:200,
                blog:result
            }
        }
        else{
            return{
                statusCode:404,
                message:"no data found"
            }
        }
    })
}

const removeBlog=(id)=>{
    return db.Blog.deleteOne({id}).then(result=>{
        if(result){
            return{
                statusCode:200,
                message:"blog deleted"
            }
        }
        else{
            return{
                statusCode:404,
                message:"blog not found"
            }
        }
    })
        
    }

    const addBlog=(id,title,description,image)=>{
        return db.Blog.findOne({id}).then(result=>{
            if(result){
                return{
                    statusCode:404,
                    message:"blog already present"
                }
            }
            else{
               const newBlog=new db.Blog({
                id,
                title,
                description,
                image
            
               })
               newBlog.save()
               return{
                statusCode:200,
                message:"blog added succesfully"
               }
            }
        })
    }

    const getBlog=(id)=>{
       return db.Blog.findOne({id}).then(result=>{
        if(result){
            return{
                statusCode:200,
                message:result
            }
        }
        else{
            return{
                statusCode:404,
                message:"blog not exist"
            }
        }
       })
    }
const updateBlog=(id,title,description,image)=>{
    return db.Blog.findOne({id}).then(result=>{
        if(result){
            result.id=id
            result.title=title
            result.description=description
            result.image=image


            result.save()

            return{
                statusCode:200,
                message:"blog updated"
            }
        }
        else{
            return{
                statusCode:404,
                message:"blog is not present"
            }
        }

    })
}
const Login=(name,email,password)=>{
    return db.Login.findOne({name,email,password}).then(result=>{
        if(result){
            return{
                statusCode:200,
                message:"Login success"
            }
        }
        else{
            return{
                statusCode:404,
                message:"incorresct email or password"
            }
        }
    })
}
module.exports={
    allBlog,removeBlog,addBlog,getBlog,updateBlog,Login
}