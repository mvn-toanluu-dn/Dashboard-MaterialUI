import React from 'react';
import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, Card, CardHeader, Grid, IconButton } from '@mui/material';
import {
  Chart as ChartJS,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
} from 'chart.js';
import { CategoryScale } from 'chart.js';
Chart.register(CategoryScale);

ChartJS.register(LineController, LineElement, PointElement, LinearScale, Title);
const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];
const state = {
  labels: months,
  options: {},
  datasets: [
    {
      label: 'Dataset 1',
      data: [54, 67, 41, 55, 62, 45, 55, 73, 60, 76, 48, 79],
      backgroundColor: '#4782da',
      barThickness: 5,
    },
    {
      label: 'Dataset 2',
      data: [69, 66, 24, 48, 52, 51, 44, 53, 62, 79, 51, 68],
      backgroundColor: '#c1d5f2',
      barThickness: 5,
    },
  ],
};
const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      stacked: true,
      grid: {
        display: false,
      },
    },
    y: {
      stacked: true,
      grid: {
        display: false,
      },
    },
  },
};
const BarChart = () => {
  return (
    <Grid className='chart-bar' item lg={3.76}>
      <Card elevation={0} className='chart-bar-card'>
        <Box
          component='div'
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <CardHeader
            className='chart-bar-header card-header'
            title='Mobile / Desktop'
            variant='h6'
          ></CardHeader>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </Box>
        <Grid className='chart-bar-grid'>
          <Bar height={'303'} data={state} options={options} />
        </Grid>
      </Card>
    </Grid>
  );
};

export default BarChart;
