import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {IconButton} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Grid from '@mui/material/Grid';

export default function MovieCard({ movie }) {
  const { image, title, director, imdbRating, genre } = movie;

  return (
    <Card sx={{ maxWidth: 345, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <CardMedia
        component="img"
        height="300"
        image={image}
        alt={title}
        onError={(e) => { e.target.src = 'https://via.placeholder.com/300x450?text=No+Image'; }}
      />
      <CardContent>
        <Typography gutterBottom variant="h6">{title}</Typography>
        <Typography variant="body2" color="text.secondary">Directed by: {director}</Typography>
        <Typography variant="body2" color="text.secondary">Genre: {genre}</Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="add to favorites"><FavoriteIcon /></IconButton>
        <Typography variant="body2" color="text.secondary">Rating: {imdbRating}</Typography>
      </CardActions>
    </Card>
  );
}
