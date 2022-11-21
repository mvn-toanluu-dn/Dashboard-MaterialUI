import {
  Button,
  Divider,
  Grid,
  IconButton,
  Menu,
  Paper,
  Typography,
} from '@mui/material';
import LoopIcon from '@mui/icons-material/Loop';
import FilterListIcon from '@mui/icons-material/FilterList';
import MenuItem from '@mui/material/MenuItem';
import React from 'react';
import Chart from '../Chart';
import CardList from '../Card';
import '../../i18n';
import { useTranslation } from 'react-i18next';
const DashBoardMain = () => {
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Paper className='dashboard-content-main' elevation={0}>
      <Grid container className='dashboard-content-flex'>
        <Grid item>
          <Typography className='dashboard-main-title' variant='h3'>
            Default Dashboard
          </Typography>
          <Typography className='dashboard-main-subtitle' variant='subtitle1'>
            {t('description')}
            <span aria-label='Waving Hand Sign'>👋</span>
          </Typography>
        </Grid>
        <Grid item>
          <IconButton size='small' aria-label='loop' color='primary'>
            <LoopIcon className='loop-icon' />
          </IconButton>
          <IconButton size='small' aria-label='loop' color='primary'>
            <FilterListIcon className='filter-icon' />
          </IconButton>
          <Button
            disableElevation
            disableRipple={true}
            size='medium'
            variant='contained'
            color='primary'
            id='basic-button'
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            className='btn-today'
          >
            Today: April 29
          </Button>
          <Menu
            id='basic-menu'
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            elevation={0}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleClose}>Today</MenuItem>
            <MenuItem onClick={handleClose}>Yesterday</MenuItem>
            <MenuItem onClick={handleClose}>Last 7 days</MenuItem>
            <MenuItem onClick={handleClose}>Last 30 days</MenuItem>
            <MenuItem onClick={handleClose}>This month</MenuItem>
            <MenuItem onClick={handleClose}>Last month</MenuItem>
          </Menu>
        </Grid>
      </Grid>
      <Divider className='dashboard-content-hr' />
      <CardList />
      <Chart />
    </Paper>
  );
};

export default DashBoardMain;
