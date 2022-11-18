import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import React from 'react';
import { message } from '../../../utils/data/data';
const ListMessage = () => {
  return (
    <>
      {message.map((item, index) => {
        return (
          <ListItem href='/#' component='a' divider={true} key={index}>
            <ListItemAvatar>
              <Avatar alt='' src={item.avatar} />
            </ListItemAvatar>
            <ListItemText
              variant='subtitle2'
              primary={item.name}
              secondary={item.content}
              className='message-info'
            />
          </ListItem>
        );
      })}
    </>
  );
};

export default ListMessage;
