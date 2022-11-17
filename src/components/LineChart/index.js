import React from 'react';
import { Card, CardHeader, Grid, IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
} from 'chart.js';
import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';
import { Box } from '@mui/system';
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
      borderColor: '#1976d2',
      borderWidth: 2,
      tension: 0.4,
      fill: true,
      data: [
        2115, 1562, 1584, 1892, 1487, 2223, 2966, 2448, 2905, 3838, 2917, 3327,
      ],
    },
    {
      borderColor: '#ababab',
      borderWidth: 2,
      pointBackground: '#fff',
      pointBorderWidth: 2,
      tension: 0.4,
      fill: false,
      borderDash: [5, 5],
      data: [958, 724, 629, 883, 915, 1214, 1476, 1212, 1554, 2128, 1466, 1827],
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
      grid: {
        display: false,
      },
    },
  },
};
const LineChart = () => {
  return (
    <Grid className='chart-line' item xs={12} lg={8}>
      <Card elevation={0}>
        <Box
          component='div'
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <CardHeader
            className='card-header'
            title='Total revenue'
            variant='h6'
          ></CardHeader>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </Box>
        <Grid className='chart-line-grid'>
          <Line options={options} data={state} />
        </Grid>
      </Card>
    </Grid>
  );
};

export default LineChart;
