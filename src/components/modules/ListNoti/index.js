import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import React from 'react';
import { noti } from '../../../utils/data/data';
const ListNoti = () => {
  return (
    <>
      {noti.map((item, index) => {
        return (
          <ListItem href='/#' component='a' divider={true} key={index}>
            <ListItemAvatar>
              <Avatar className='noti-background'>{item.avatar}</Avatar>
            </ListItemAvatar>
            <ListItemText
              variant='subtitle2'
              primary={item.name}
              secondary={item.content}
              className='noti-info'
            />
          </ListItem>
        );
      })}
    </>
  );
};

export default ListNoti;
