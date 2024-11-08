import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function CustomCard() {
  return (
    <Card sx={{ width:'100%', backgroundColor:'steelblue'}}>
      <CardContent>
        
        <Typography variant="h5" component="div" sx={{color:"whitesmoke"}}>
          Title
        </Typography>
        <Typography sx={{ color: 'whitesmoke', mb: 1.5 }}>Stats</Typography>
       
      </CardContent>
      
    </Card>
  );
}