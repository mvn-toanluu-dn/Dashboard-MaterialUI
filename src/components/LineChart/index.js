import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Card, CardHeader, Grid, IconButton } from '@mui/material';
import { Box } from '@mui/system';
import {
  CategoryScale, Chart as ChartJS, LinearScale, LineController,
  LineElement,
  PointElement, Title
} from 'chart.js';
import Chart from 'chart.js/auto';
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
Chart.register(CategoryScale);

ChartJS.register(LineController, LineElement, PointElement, LinearScale, Title);
const LineChart = () => {
  const [gradient, setGradient] = useState();
  useEffect(() => {
    var ctx = document.getElementById('chart').getContext('2d');
    setGradient(ctx.createLinearGradient(0, 0, 0, 400));
  }, []);
  if (gradient) {
    gradient?.addColorStop(0, 'rgba(242, 245, 248, 1)');
    gradient?.addColorStop(1, 'rgba(255, 255, 255, 0)');
  }

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
        backgroundColor: gradient,
        fill: true,
        borderColor: '#1976d2',
        borderWidth: 2,
        tension: 0.4,
        data: [
          2115, 1562, 1584, 1892, 1487, 2223, 2966, 2448, 2905, 3838, 2917,
          3327,
        ],
      },
      {
        borderColor: '#ababab',
        borderWidth: 2,
        pointBackground: '#fff',
        pointBorderWidth: 2,
        tension: 0.4,
        borderDash: [5, 5],
        data: [
          958, 724, 629, 883, 915, 1214, 1476, 1212, 1554, 2128, 1466, 1827,
        ],
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
        <Grid className='chart-line-grid' id='abcd'>
          <Line id='chart' options={options} data={state} />
        </Grid>
      </Card>
    </Grid>
  );
};

export default LineChart;
