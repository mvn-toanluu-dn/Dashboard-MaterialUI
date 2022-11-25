import { Card, CardContent, Chip, Grid, Typography } from '@mui/material';
import React from 'react';

const CardItem = ({ item, index }) => {
  return (
    <Grid className='card-grid-item' item xs={3}>
      <Card elevation={0} className='card-grid'>
        <CardContent className='card-grid-content'>
          <Typography className='card-item-title' variant='h6'>
            {item.cardTitle}
          </Typography>
          <Typography className='card-item-number' variant='h3'>
            {item.number}
          </Typography>
          <Typography className='card-item-percent' variant='subtitle2'>
            <span>{item.percent}</span>
            {item.time}
          </Typography>
          {item.chip && <Chip className='card-item-chip' label={item.chip} ></Chip>}
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CardItem;
