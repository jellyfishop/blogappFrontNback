import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Avatar, CardHeader } from '@mui/material';


function View() {

const [blog,setBlog]=useState({})

const params=useParams()

    const fetchBlog=async ()=>{
        const result=await axios.get('http://localhost:8000/getBlog/'+params.id)
        setBlog(result.data.message);
    
      }
      useEffect(()=>{
        fetchBlog()
      },[])
    
  return (
    <div>

<Card sx={{ width: "60%", margin:'auto', mt:2 ,padding:2 ,boxShadow:"5px 5px 10px #ccc" ,":hover:":{
        boxShadow:"10px 10px 20px #ccc" 
    }}}>
      
     
    <CardHeader
      
      
      
      title={blog.title}


    />
    <CardMedia
      component="img"
      height="450"
      
      image={blog.image}
      
    />
    <CardContent>
      <Typography  variant="h5" color="text.secondary">
        {blog.description}
      </Typography>

    </CardContent>
     

    

    
    
  </Card>


    </div>
  )
}

export default View