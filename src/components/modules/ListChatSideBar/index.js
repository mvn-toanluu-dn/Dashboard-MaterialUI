import React from 'react';
import { chatsidebar } from '../../../utils/data/data';
import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import Badge from '@mui/material/Badge';
const ChatList = () => {
  return (
    <>
      {chatsidebar.map((item, index) => (
        <ListItem
          href='/#'
          component='a'
          key={index}
          sx={{ '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.04)' } }}
        >
          <ListItemAvatar>
            {item.iOnline === true ? (
              <Badge
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                variant='dot'
                color='success'
                overlap='circular'
                badgeContent=''
                className='chat-badge'
              >
                <Avatar alt='' src={item.avatar} />
              </Badge>
            ) : (
              <Avatar alt='' src={item.avatar} />
            )}
          </ListItemAvatar>
          <ListItemText
            sx={{
              '> span': { fontSize: '13px' },
              '> p': { fontSize: '0.8125rem' },
            }}
            variant='subtitle2'
            primary={item.name}
            secondary={item.content}
          />
        </ListItem>
      ))}
    </>
  );
};

export default ChatList;
