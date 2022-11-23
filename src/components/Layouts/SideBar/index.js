import { ListSubheader } from '@mui/material';
import Chip from '@mui/material/Chip';
import List from '@mui/material/List';
import React from 'react';
import Logo from '../../../assets/images/logo';
import { sidebar } from '../../../utils/data/data';
import SideBarItem from '../../SideBarItem';
const SideBar = () => {
  return (
    <>
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
          {sidebar.map((sidebarItem, index) => (
            <SideBarItem key={index} {...sidebarItem} />
          ))}
        </List>
      </div>
    </>
  );
};

export default SideBar;
