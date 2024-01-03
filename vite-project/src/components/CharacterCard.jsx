import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CharacterCard({name, status, imageUrl}) {
  return (
    <Card sx={{ maxWidth: 350, margin: '1px'}}>
      <CardMedia
        sx={{ height: 140 }}
        image={imageUrl}
        title={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {status=== "unknown" && "Ninguém sabe"}
          {status === "Dead" && "Morto"}
          {status === "Alive" && "Vivo"}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Saiba mais</Button>
      </CardActions>
    </Card>
  );
}
