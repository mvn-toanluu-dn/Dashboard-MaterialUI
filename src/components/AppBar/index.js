import Grid from '@mui/material/Grid';
import React from 'react';
import DashBoardMain from '../DashboardMain';
import Footer from '../modules/Footer';
import Header from '../modules/Header';
const MenuBar = () => {
  return (
    <Grid item xs={9.8} className='dashboard-content'>
      <Header />
      <DashBoardMain />
      <Footer />
    </Grid>
  );
};

export default MenuBar;
