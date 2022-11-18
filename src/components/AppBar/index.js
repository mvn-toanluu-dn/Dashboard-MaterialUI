import Grid from '@mui/material/Grid';
import React from 'react';
import DashBoardMain from '../DashboardMain';
import Footer from '../Layouts/Footer';
import Header from '../Layouts/Header';
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
