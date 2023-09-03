import { Box,InputLabel,TextField,Typography,Button } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


const labelStyles = {mb:1,mt:1,fontSize:'15px',fontWeight:"bold"}
function Update() {

  const [id,setId]=useState('')
  const [title,setTitle]=useState('')
  const [description,setDescription]=useState('')
  const [image,setImage]=useState('')



  console.log(title);
  const params=useParams()
  // console.log(params.id);

  const fetchBlog=async ()=>{
    const result=await axios.get('http://localhost:8000/getBlog/'+params.id)
    console.log(result.data.message);

    setId(result.data.message.id)
    setTitle(result.data.message.title)
    setDescription(result.data.message.description)
    setImage(result.data.message.image)


  }
  const location=useNavigate()
const handleUpdate=async (e)=>{
  e.preventDefault()

  const body={
    id,
    title,
    description,
    image
    
  }
  const result=await axios.post('http://localhost:8000/updateBlog',body)

  alert(result.data.message)
  location('/blogs')
}

  useEffect(()=>{
    fetchBlog()
  },[])


  return (
    <div>
         <form>
        <Box border={3}
          borderColor="blue"
          borderRadius={10}
          boxShadow="10px 10px 20px #ccc"
          padding={3}
          margin={'auto'}
          marginTop={3}
          display="flex"
          flexDirection={'column'}
          width={"70%"} >

          <Typography fontWeight={'bold'} padding={3} color='gray' variant='h4' textAlign={'center'}>UPDATE YOUR BLOG</Typography>
          <InputLabel sx={labelStyles}>Title</InputLabel>
          <TextField onChange={(e)=>setTitle(e.target.value)} value={title}/>
          <InputLabel sx={labelStyles}>Description</InputLabel>
          <TextField onChange={(e)=>setDescription(e.target.value)} value={description} />

          


          <InputLabel sx={labelStyles}>Image URL</InputLabel>
          <TextField onChange={(e)=>setImage(e.target.value)} value={image}/>
          <Button onClick={(e)=>handleUpdate(e)}>Update</Button>
        </Box>
      </form>
    </div>
  )
}

export default Update