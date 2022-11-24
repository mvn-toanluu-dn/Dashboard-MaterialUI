import { Box, Divider, Grid, List, TextField } from '@mui/material';
import React, { useState } from 'react';
import ListChatSideBar from '../modules/ListChatSideBar';
const ChatSideBar = () => {
  const [inputText, setInputText] = useState('');
  const inputHandler = (e) => {
    const lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
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
          onChange={inputHandler}
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
        <ListChatSideBar input={inputText} />
      </List>
    </Grid>
  );
};

export default ChatSideBar;
