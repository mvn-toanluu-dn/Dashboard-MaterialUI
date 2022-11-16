import { Grid } from '@mui/material';
import React from 'react';
import BarChart from '../BarChart/index.js';
import LineChart from '../LineChart/index.js';
import DoughnutChart from '../DoughnutChart/index.js';
import TableBar from '../TableBar/index.js';
const Chart = () => {
  return (
    <>
      <Grid container>
        <LineChart />
        <DoughnutChart />
      </Grid>
      <Grid container sx={{ mb: 3 }}>
        <BarChart />
        <TableBar />
      </Grid>
    </>
  );
};

export default Chart;
