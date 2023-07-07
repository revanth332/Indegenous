import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid } from '@mui/material';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import IconButton from '@mui/material/IconButton';

import bookImg from './static/Images/book.jpg';


const App = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const response = await axios.get('https://api.gyanibooks.com/library/get_dummy_notes');
      setNotes(response.data);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ flexGrow: 1,marginBottom:"20px" }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Library Notes
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
      
      <Grid container spacing={2}>
        {notes.map((note) => (
          <Grid item xs={12} sm={6} md={4} key={note.id}>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={bookImg}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {note.title.toLowerCase().charAt(0).toUpperCase()+note.title.toLowerCase().slice(1)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus inventore excepturi natus animi, 
        libero in quas dolore earum eum recusandae corrupti sed architecto quisquam mollitia tempore totam. 
        Minus, doloremque pariatur?

        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default App;
