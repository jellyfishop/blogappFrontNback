import { Box,InputLabel,TextField,Typography,Button } from '@mui/material'
import axios from 'axios'
import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import uuid from 'react-uuid'
import Header from './Header'


const labelStyles = {mb:1,mt:2,fontSize:'24px',fontWeight:"bold"}
function AddBlog() {
  
  const [id,setId]=useState('')
  const [title,setTitle]=useState('')
  const [description,setDescription]=useState('')
  const [image,setImage]=useState('')



// console.log(title);


useEffect(()=>{
  setId(uuid().slice(0,3))

},[])

let location=useNavigate()

const addBlog=async (e)=>{
  e.preventDefault()

  

 setId(uuid().slice(0,3))

const body={
  id,
  title,
  description,
  image
  
}
 const result=await axios.post('http://localhost:8000/addBlog',body)
 alert(result.data.message)
 location('/blogs')
}



  return (
    <div>
      <Header></Header>
      <form>
        <Box border={3}
          borderColor="gray"
          borderRadius={10}
          boxShadow="10px 10px 20px #ccc"
          padding={3}
          margin={'auto'}
          marginTop={3}
          display="flex"
          flexDirection={'column'}
          width={"70%"} >

          <Typography fontWeight={'bold'} padding={3} color='gray' variant='h2' textAlign={'center'}>Post your blog</Typography>
          <InputLabel sx={labelStyles}>Title</InputLabel>
          <TextField onChange={(e)=>setTitle(e.target.value)} />
          <InputLabel sx={labelStyles}>Description</InputLabel>
          <TextField  onChange={(e)=>setDescription(e.target.value)}/>
          <InputLabel sx={labelStyles}>Image URL</InputLabel>
          <TextField onChange={(e)=>setImage(e.target.value)}/>

          

          <Button onClick={(e)=>addBlog(e)}>Ok</Button>

        </Box>
      </form>
    </div>
  )
}

export default AddBlog