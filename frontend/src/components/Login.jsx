import React from 'react'
import { Box,TextField, Button } from '@mui/material'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'



function Login() {
  
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  // console.log(name);
   let navigate=useNavigate()

  const Login=async (e)=>{

    e.preventDefault()
    const body={
      name,
      email,
      password
    }


    const result= await axios.post('http://localhost:8000/login',body)
    alert(result.data.message)
    console.log(result.data.message);

    navigate('/blogs')





  }

  return (
    <div>
      <Navbar></Navbar>
      <form >
      <Box
        maxWidth={400}
        display='flex'
        flexDirection={'column'}
        alignItems='center'
        justifyContent={'center'}
        boxShadow='10px 10px 20px #ccc'
        padding={3}
        margin='auto'
        marginTop={5}
        borderRadius={5}
      >
        
       <TextField onChange={(e)=>setName(e.target.value)} name='name'  placeholder='Name' margin='normal' />
           
       <TextField onChange={(e)=>setEmail(e.target.value)} name='email'  type={'email'} placeholder='Email' margin='normal' />

        <TextField onChange={(e)=>setPassword(e.target.value)} name='password'  type={'password'} placeholder='Password' margin='normal' />


        <Button onClick={(e)=>Login(e)} type='submit' sx={{borderRadius:3, marginTop:3 }} color='success'>Submit</Button>
        {/* <Button onClick={()=>setIsSignup(!isSignup)} sx={{borderRadius:3, marginTop:3 }}> {isSignup ? "Login ?" : "Signup ?"}</Button> */}

      </Box>
    </form></div>
  )
}

export default Login