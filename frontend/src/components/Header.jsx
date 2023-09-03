import React from 'react'
import {AppBar,Typography,Toolbar,Box,Button,Tabs,Tab, IconButton} from '@mui/material'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Favorite } from '@mui/icons-material'


function Header() {
  const [value, setvalue] = useState()
  return (
    
   <AppBar className='AppBar' position='sticky' sx={{ background:"radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(11,11,11,1) 100%);" }}>
    <Toolbar>

        <Typography  variant='h4'>Blogs</Typography>
        <Favorite></Favorite>
        <Box display='flex' marginLeft={'auto'} marginRight="auto">
          <Tabs textColor='inherit' value={value} onChange={(e,val)=>setvalue(val)}>
            <Tab LinkComponent={Link} to="/blogs" label='All Blogs'/>
            <Tab LinkComponent={Link} to="/blogs/add" label='Add blog'/>


          </Tabs>
        </Box>
        <Box display='flex' marginLeft='auto'>
            {/* <Button LinkComponent={Link} to="/login" variant='contained' sx={{ margin: 1,borderRadius: 10 }} >Login</Button> */}
            {/* <Button LinkComponent={Link} to="/login" variant='contained' sx={{ margin: 1,borderRadius: 10 }} >sign up</Button> */}
            <Link to={'/'}>
            <Button variant='outlined' sx={{ margin: 1,borderRadius: 20 }} color='error' >Log out</Button>

            </Link>


        </Box>

    </Toolbar>
   </AppBar>
  )

//   <Box sx={{ flexGrow: 1 }}>
//   <AppBar position="static">
//     <Toolbar>
//       <IconButton
//         size="large"
//         edge="start"
//         color="inherit"
//         aria-label="menu"
//         sx={{ mr: 2 }}
//       >
//          <MenuIcon />
//       </IconButton>
//       <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//         News
//       </Typography>
//       <Button color="inherit">Login</Button>
//     </Toolbar>
//   </AppBar>
// </Box>
// );

}

export default Header