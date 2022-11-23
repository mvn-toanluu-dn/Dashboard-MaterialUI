import { Box, Divider, Grid, List, TextField } from '@mui/material';
import React from 'react';
import ChatList from '../modules/ListChatSideBar';

const ChatSideBar = () => {
  return (
    <Grid>
      <Box
        component='form'
        sx={{ p: 1, '& > :not(style)': { width: '255px' } }}
        noValidate
        autoComplete='off'
      >
        <TextField
          id='outlined-basic'
          label='Search contacts'
          fullwidth='true'
          InputLabelProps={{ style: { fontSize: '13px', marginBottom: 0 } }}
          inputProps={{
            style: { padding: '16.5px 14px', height: '1.4375em' },
          }}
          sx={{
            '& .MuiInputBase-root': {
              height: 51,
            },
            border: 'none',
            boxShadow: 'none',
          }}
        />
      </Box>
      <Divider fullwidth='true' />
      <List disablePadding={true}>
        <ChatList />
      </List>
    </Grid>
  );
};

export default ChatSideBar;
