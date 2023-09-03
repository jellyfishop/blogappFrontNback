import React from 'react'
import {AppBar,Typography,Toolbar,Box} from '@mui/material'
import { useState } from 'react'



function Navbar() {
    const [value, setvalue] = useState()

  return (
    <div>
         <AppBar position='sticky' sx={{ background:"radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(11,11,11,1) 100%);" }}>
    <Toolbar>
        <Typography variant='h4'>Hi there...</Typography>
        
        <Box display='flex' marginLeft='auto'>
            {/* <Link to={"/login"}>
            <Button   variant='contained' sx={{ margin: 1,borderRadius: 10 }} >Login</Button>
</Link> */}


        </Box>

    </Toolbar>
   </AppBar>
    </div>
  )
}

export default Navbar