import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React from 'react';
import MenuBar from '../../components/AppBar';
import SideBar from '../../components/modules/SideBar';
const Dashboard = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <SideBar />
        <MenuBar />
      </Grid>
    </Box>
  );
};

export default Dashboard;