import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
const SideBarItem = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  const { title, icon, data } = props;
  return (
    <>
      <ListItemButton
        className='dashboard-sidebar-list-title'
        disableRipple={true}
        onClick={() => handleClick()}
      >
        <ListItemIcon className='dashboard-sidebar-list-icon icon'>
          {icon}
        </ListItemIcon>
        <ListItemText className='dashboard-sidebar-list-name' primary={title} />
        {open ? (
          <ExpandLess className='dashboard-sidebar-close' />
        ) : (
          <ExpandMore className='dashboard-sidebar-open' />
        )}
      </ListItemButton>
      {data.map((item, index) => (
        <Collapse
          className='sidebar-list-name'
          in={open}
          timeout='auto'
          unmountOnExit
          key={item.id}
        >
          <List disablePadding>
            <Link to={`/${item.itemValue}`}>
              <ListItemButton
                sx={{ pl: 4 }}
                selected={selectedIndex === item.id}
                onClick={(event) => handleListItemClick(event, item.id)}
                disableRipple={true}
                key={index}
                className='dashboard-sidebar-item'
              >
                <ListItemText
                  className='dashboard-sidebar-text'
                  primary={item.itemValue}
                />
              </ListItemButton>
            </Link>
          </List>
        </Collapse>
      ))}
    </>
  );
};

export default SideBarItem;
