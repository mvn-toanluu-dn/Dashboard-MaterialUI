import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import TuneIcon from '@mui/icons-material/Tune';
import { ListSubheader } from '@mui/material';
import Chip from '@mui/material/Chip';
import Collapse from '@mui/material/Collapse';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import React from 'react';
import Logo from '../../../assets/images/logo';
const SideBar = () => {
  const [open, setOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const handleClick = (id) => {
    setOpen(!open);
  };

  return (
    <Grid item xs={2.15} className='dashboard-sidebar'>
      <div>
        <a href='/#' className='dashboard-home'>
          <Logo />
          <div className='dashboard-name'>
            Mira
            <Chip
              className='dashboard-badge'
              color='default'
              label='PRO'
              size='small'
            />
          </div>
        </a>
      </div>
      <div>
        <List
          sx={{ width: '100%', maxWidth: 360 }}
          component='nav'
          aria-labelledby='nested-list-subheader'
          subheader={
            <ListSubheader
              className='dashboard-sidebar-route-title'
              component='div'
              id='nested-list-subheader'
            >
              PAGES
            </ListSubheader>
          }
        >
          <ListItemButton
            className='dashboard-sidebar-list-title'
            disableRipple={true}
            onClick={handleClick}
          >
            <ListItemIcon className='dashboard-sidebar-list-icon icon'>
              <TuneIcon size='small' />
            </ListItemIcon>
            <ListItemText
              className='dashboard-sidebar-list-name'
              primary='Dashboard'
            />
            {open ? (
              <ExpandLess className='dashboard-sidebar-close' />
            ) : (
              <ExpandMore className='dashboard-sidebar-open' />
            )}
          </ListItemButton>
          <Collapse
            className='sidebar-list-name'
            in={open}
            timeout='auto'
            unmountOnExit
          >
            <List component='div' disablePadding>
              <ListItemButton
                sx={{ pl: 4 }}
                selected={selectedIndex === 0}
                onClick={(event) => handleListItemClick(event, 0)}
                disableRipple={true}
                className='dashboard-sidebar-item'
              >
                <ListItemText
                  className='dashboard-sidebar-text'
                  primary='Default'
                />
              </ListItemButton>
            </List>
          </Collapse>
          <Collapse
            className='sidebar-list-name'
            in={open}
            timeout='auto'
            unmountOnExit
          >
            <List component='div' disablePadding>
              <ListItemButton
                sx={{ pl: 4 }}
                selected={selectedIndex === 1}
                onClick={(event) => handleListItemClick(event, 1)}
                disableRipple={true}
                className='dashboard-sidebar-item'
              >
                <ListItemText
                  className='dashboard-sidebar-text'
                  primary='Analytics'
                />
              </ListItemButton>
            </List>
          </Collapse>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <List component='div' disablePadding>
              <ListItemButton
                sx={{ pl: 4 }}
                selected={selectedIndex === 2}
                onClick={(event) => handleListItemClick(event, 2)}
                disableRipple={true}
                className='dashboard-sidebar-item'
              >
                <ListItemText
                  className='dashboard-sidebar-text'
                  primary='SaaS'
                />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
      </div>
    </Grid>
  );
};

export default SideBar;
