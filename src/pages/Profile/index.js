import {
  Avatar,
  Box,
  Breadcrumbs,
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid,
  Icon,
  LinearProgress,
  Link,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
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
import { Bar } from 'react-chartjs-2';
import {
  aboutlink,
  cardprofileitem,
  elsewhere,
  skillchip,
} from '../../utils/data/data';
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
      label: 'Sales',
      data: [54, 67, 41, 55, 62, 45, 55, 73, 60, 76, 48, 79],
      backgroundColor: ['rgba(71, 130, 218, 1)'],
      barThickness: 15,
      maxBarThickness: 8,
    },
    {
      label: 'Renevue',
      data: [69, 66, 24, 48, 52, 51, 44, 53, 62, 79, 51, 68],
      backgroundColor: ['rgba(238, 238, 238, 1)'],
      barThickness: 15,
      maxBarThickness: 8,
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
    y: {
      grid: {
        display: false,
      },
    },
  },
};
const createData = (name, tech, license, sales) => {
  return { name, tech, license, sales };
};
const rows = [
  createData('AppStack', 'HTML', 'Single License', '76'),
  createData('Mira', 'React', 'Single License', '38'),
  createData('Milo', 'HTML', 'Single License', '43'),
  createData('Robust UI Kit', 'Angular', 'Single License', '27'),
  createData('Spark', 'React', 'Single License', '12'),
];
const Profile = () => {
  return (
    <Box className='dashboard-content-main chat' elevation={0}>
      <Typography className='dashboard-main-title title' variant='h3'>
        Profile
      </Typography>
      <Breadcrumbs aria-label='breadcrumb'>
        <Link underline='hover' color='primary' href='/*'>
          Dashboard
        </Link>
        <Link underline='hover' color='primary' href='/*'>
          Pages
        </Link>
        <Typography
          className='dashboard-link'
          fontSize='small'
          color='text.primary'
        >
          Profile
        </Typography>
      </Breadcrumbs>
      <Divider className='dashboard-content-hr divider' />
      <Grid container>
        <Grid item xs={12} lg={2.8}>
          <Card sx={{ mb: 3 }} elevation={0}>
            <CardContent>
              <Typography
                sx={{ fontSize: '1rem' }}
                variant='h6'
                gutterBottom={true}
              >
                Profile Details
              </Typography>
              <Box sx={{ textAlign: 'center' }}>
                <Avatar
                  src='https://mira.bootlab.io/static/img/avatars/avatar-1.jpg'
                  alt=''
                  sx={{
                    display: 'inline-block',
                    width: '128px',
                    height: '128px',
                  }}
                />
                <Typography component='div' variant='body2' gutterBottom={true}>
                  <Box>Lucy Lavender</Box>
                  <Box>Lead Developer</Box>
                </Typography>
                <Button
                  sx={{ fontSize: '0.754464rem', textTransform: 'none', ml: 1 }}
                  size='small'
                  variant='contained'
                >
                  Follow
                </Button>
                <Button
                  sx={{ fontSize: '0.754464rem', textTransform: 'none', ml: 1 }}
                  size='small'
                  variant='contained'
                >
                  Message
                </Button>
              </Box>
            </CardContent>
          </Card>
          <Card sx={{ mb: 3 }} elevation={0}>
            <CardContent>
              <Typography
                sx={{ fontSize: '1rem' }}
                variant='h6'
                gutterBottom={true}
              >
                Skills
              </Typography>
              <Box sx={{ textAlign: 'center' }}>
                {skillchip.map((item, index) => (
                  <>
                    {item.id === 1 ? (
                      <Chip
                        sx={{
                          height: '24px',
                          borderRadius: '6px',
                          margin: '0px 4px 4px 0px',
                        }}
                        size='small'
                        key={`skill-${index}`}
                        color='primary'
                        label={item.title}
                      />
                    ) : (
                      <Chip
                        size='small'
                        sx={{
                          height: '24px',
                          borderRadius: '6px',
                          margin: '0px 4px 4px 0px',
                        }}
                        key={`skill-${index}`}
                        label={item.title}
                      />
                    )}
                  </>
                ))}
              </Box>
            </CardContent>
          </Card>
          <Card sx={{ mb: 3 }} elevation={0}>
            <CardContent>
              <Typography
                sx={{ fontSize: '1rem' }}
                variant='h6'
                gutterBottom={true}
              >
                About
              </Typography>
              {aboutlink.map((item, index) => (
                <>
                  <Grid
                    key={index}
                    container
                    sx={{ alignItems: 'center', fontSize: '13px', mb: 1 }}
                  >
                    <Grid item sx={{ display: 'flex', pr: 1 }}>
                      {item.icon}
                    </Grid>
                    <Grid item>
                      {item.title}&nbsp;
                      <Link href='#' underline='hover'>
                        {item.content}
                      </Link>
                    </Grid>
                  </Grid>
                </>
              ))}
            </CardContent>
          </Card>
          <Card sx={{ mb: 3 }} elevation={0}>
            <CardContent>
              <Typography
                sx={{ fontSize: '1rem' }}
                variant='h6'
                gutterBottom={true}
              >
                About
              </Typography>
              {elsewhere.map((item, index) => (
                <>
                  <Grid
                    key={index}
                    container
                    sx={{ alignItems: 'center', mb: 1 }}
                  >
                    <Grid item sx={{ display: 'flex', pr: 1 }}>
                      {item.icon}
                    </Grid>
                    <Grid item>
                      <Link href='#' underline='hover'>
                        {item.info}
                      </Link>
                    </Grid>
                  </Grid>
                </>
              ))}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} lg={9.2} sx={{ pl: 3 }}>
          <Card elevation={0} sx={{ mb: 3 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: '1rem' }}
                variant='h6'
                gutterBottom={true}
              >
                Sales / Revenue
              </Typography>
              <Bar height={'110'} data={state} options={options} />
            </CardContent>
          </Card>
          <Grid container spacing='2'>
            {cardprofileitem.map((item, index) => (
              <>
                <Grid className='card-profile' item xs={12} lg={4} key={index}>
                  <Box sx={{ position: 'relative' }}>
                    <Card elevation={0} sx={{ mb: 3 }}>
                      <CardContent>
                        <Typography
                          sx={{ fontSize: '1.75rem' }}
                          variant='h5'
                          gutterBottom={true}
                        >
                          {item.amount}
                        </Typography>
                        <Typography
                          sx={{ mb: 0, mt: '1.5rem' }}
                          variant='body2'
                          gutterBottom={true}
                        >
                          {item.title}
                        </Typography>
                        <Icon
                          sx={{
                            position: 'absolute',
                            right: '16px',
                            top: '32px',
                          }}
                          className='profile-icon-card'
                        >
                          {item.icon}
                        </Icon>
                        <LinearProgress
                          variant='determinate'
                          value={item.progress}
                          sx={{ mt: 2 }}
                        />
                      </CardContent>
                    </Card>
                  </Box>
                </Grid>
              </>
            ))}
          </Grid>
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Typography variant='h6' gutterBottom={true}>
                Products
              </Typography>
              <Grid>
                <Table sx={{ minWidth: 315 }} aria-label='simple table'>
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell>Tech </TableCell>
                      <TableCell>License</TableCell>
                      <TableCell>Sales</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow key={row.name} sx={{ 'td,th': { border: 0 } }}>
                        <TableCell component='th' scope='row'>
                          {row.name}
                        </TableCell>
                        <TableCell>
                          <Chip
                            className='table-bar-chip'
                            size='medium'
                            label={row.tech}
                            color={
                              row.tech === 'HTML'
                                ? 'primary'
                                : row.tech === 'React'
                                ? 'success'
                                : 'error'
                            }
                          />
                        </TableCell>
                        <TableCell>{row.license}</TableCell>
                        <TableCell>{row.sales}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Profile;
