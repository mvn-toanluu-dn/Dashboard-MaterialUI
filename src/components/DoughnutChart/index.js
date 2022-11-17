import MoreVertIcon from '@mui/icons-material/MoreVert';
import {
  Box,
  Card,
  CardHeader,
  Grid,
  IconButton,
  Typography,
} from '@mui/material';
import {
  CategoryScale,
  Chart as ChartJS,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
  Title,
} from 'chart.js';
import Chart from 'chart.js/auto';
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import TableDoughnut from '../TableDoughnut';
Chart.register(CategoryScale);

ChartJS.register(LineController, LineElement, PointElement, LinearScale, Title);

const circle = ['Social', 'Search Engines', 'Direct', 'Other'];
const state = {
  labels: circle,
  datasets: [
    {
      data: [260, 125, 54, 146],
      backgroundColor: ['#4782da', '#ed4134', '#f3983e', '#eeeeee'],
      borderWidth: 10,
      cutout: 60,
    },
  ],
};
const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
};
const DoughnutChart = () => {
  return (
    <Grid className='chart-doughnut' item xs={12} lg={4}>
      <Card elevation={0} className='chart-doughnut-card'>
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
            color='#f3983e'
            title='Weekly sales'
            variant='h6'
          ></CardHeader>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </Box>
        <div className='chart-doughnut-all'>
          <Box className='chart-doughnut-box'>
            <div className='chart-doughnut-statistical'>
              <Typography className='chart-doughnut-percent' variant='h4'>
                +27%
              </Typography>
              <Typography className='chart-doughnut-span' variant='caption'>
                more sales
              </Typography>
            </div>
            <Doughnut options={options} data={state} />
          </Box>
        </div>
        <TableDoughnut />
      </Card>
    </Grid>
  );
};

export default DoughnutChart;
