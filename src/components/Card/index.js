import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CardItem from '../modules/CardItem';

const CardList = () => {
  const [card, setCard] = useState([]);
  useEffect(() => {
    try {
      const fetchApi = async () => {
        await fetch('https://6336ba535327df4c43c81ae6.mockapi.io/card')
          .then((res) => res.json())
          .then((data) => {
            setCard(data);
            console.log(data);
          });
      };
      fetchApi();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <>
      <Grid container>
        {card.map((item, index) => {
          return <CardItem item={item} key={index} />;
        })}
      </Grid>
    </>
  );
};

export default CardList;
