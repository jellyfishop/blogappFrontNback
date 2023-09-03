import React, { useEffect, useState } from 'react'
import { Avatar, CardContent, CardMedia, Typography, Card, Button} from '@mui/material'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Header from './Header'





 

function Blog() {

  var [Blogs, setBlogs] = useState([])

  const BlogList = async () => {
    const result = await axios.get("http://localhost:8000/getAllBlog")
    setBlogs(result.data.blog)
  }


  const handleDelete = async (id) => {
    const result = await axios.delete('http://localhost:8000/deleteBlog/' + id)
    alert(result.data.message)
  }
  // console.log(Blogs);

  useEffect(() => {
    BlogList()
  }, [])



  return (
    <div>

      <Header></Header>
      {Blogs?.map((item, index) => (
        <Card sx={{
          width: "60%", margin: 'auto', mt: 3, padding: 3, boxShadow: "10px 10px 20px gray", ":hover:": {
            boxShadow: "10px 10px 20px #ccc"
          }
        }}>






          <Typography textAlign='center'  padding={1} gutterBottom variant="h5" component="div">
            {item.title}         

            <link href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Anton&family=Chakra+Petch&family=Creepster&family=Exo+2&family=Michroma&family=Orbitron&family=Oswald&family=Press+Start+2P&family=Roboto&family=Rubik+Iso&family=Staatliches&family=Zen+Dots&display=swap" rel="stylesheet"></link>

          </Typography>
          <CardContent>


          <CardMedia
                component="img"
                height="400"
                image={item.image}
                alt="Paella dish"
              />
            
            <Typography padding={2} variant="h6" color="text.secondary">
         
              {item.description}
        
             
            </Typography>


          </CardContent>


          <Link to={'/edit/' + item.id} >
            <Button>EDIT</Button>
          </Link>

          <Link to={"/view/" + item.id}>
            <Button>View</Button>
          </Link>

          <Button onClick={() => handleDelete(item.id)}>Delete</Button>


        </Card>
      ))}
    </div>
  )
}

export default Blog