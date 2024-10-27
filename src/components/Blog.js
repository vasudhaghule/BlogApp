import React from 'react';
import {Card, Avatar, CardHeader, CardMedia, CardContent, Typography, IconButton, Box} from '@mui/material';
import { red } from '@mui/material/colors';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from "react-router-dom"
import axios from 'axios';

const Blog = ({title, description, imageURL, userName, isUser, id}) => {

  const navigate = useNavigate();
  const handleEdit = (e) => {
    navigate(`/myblogs/${id}`)
  };
  // console.log(title, isUser)

  const deleteRequset = async () => {
    const res = await axios.delete(`http://localhost:5000/api/blog/${id}`).catch(err => console.log(err));
    const data = await res.data;

    return data
  }
  const handleDelete = () => {
    deleteRequset().then(() => navigate("/")).then(()=>navigate("/blogs"));
  }

  return (
    <div>
        
      <Card sx={{ width: "40%", 
                  margin:'auto', 
                  mt:2, 
                  padding: 2, 
                  boxShadow: "5px 5px 10px gray", 
                  ":hover:":{
                      boxShadow: "15px 15px 25px gray"
                  }
              }}
      >

      {isUser && (
        <Box display="flex">

          <IconButton onClick={ handleEdit } sx={{marginLeft: "auto"}}>
            <EditIcon color = "info" />
          </IconButton>

          <IconButton onClick={ handleDelete }>
            <DeleteIcon />
          </IconButton>

        </Box>

      )}
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            { userName.charAt(0) }
          </Avatar>
        }
        
        title={title}
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image={ imageURL }
        alt="Paella dish"
      />

      

      <CardContent>

        <hr />
        <br />

        <Typography variant="body2" color="text.secondary">
          <b>{userName}</b> {" : "}
          { description }
        </Typography>
      </CardContent>
      
    </Card>

    </div>
  )
}

export default Blog