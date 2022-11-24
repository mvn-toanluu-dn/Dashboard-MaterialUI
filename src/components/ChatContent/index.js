import SendIcon from '@mui/icons-material/Send';
import {
  Avatar,
  Button,
  Divider,
  Grid,
  List,
  ListItem,
  TextField,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useRef, useState } from 'react';
import { chatcontent } from '../../utils/data/data';

const ChatContent = () => {
  const [message, setMessage] = useState([...chatcontent]);
  const [inputText, setInputText] = useState('');
  const currentUser = 2;
  const btnRef = useRef();
  const onKeyDown = (e) => {
    e.preventDefault();
    if (e.keyCode === 13) {
      const mess1 = message.filter((item) => item.id === currentUser);
      setMessage([
        ...message,
        {
          avatar: mess1[0].avatar,
          name: mess1[0].name,
          content: inputText,
          time: 'now',
          id: mess1[0].id,
        },
      ]);
      setInputText('');
      setTimeout(
        () =>
          btnRef.current.scrollTo(
            0,
            btnRef.current.clientHeight + btnRef.current.scrollHeight
          ),
        100
      );
    }
    console.log(e.keyCode);
  };
  const inputChange = (e) => {
    setInputText(e.target.value);
  };
  const handleSubmit = (e) => {
    const mess1 = message.filter((item) => item.id === currentUser);
    setMessage([
      ...message,
      {
        avatar: mess1[0].avatar,
        name: mess1[0].name,
        content: inputText,
        time: 'now',
        id: mess1[0].id,
      },
    ]);
    setInputText('');
    setTimeout(
      () =>
        btnRef.current.scrollTo({
          top: btnRef.current.scrollHeight,
        }),
      100
    );
  };
  return (
    <>
      <List
        ref={btnRef}
        className='chat-list-content'
        sx={{
          scrollBehavior: 'smooth',
          p: 0,
          height: `calc(65vh - 94px)`,
          overflowY: 'scroll',
        }}
      >
        {message.map((item, index) => (
          <ListItem
            disablePadding={true}
            sx={{
              m: 3.75,
              width: 'auto',
              justifyContent: `${
                currentUser === item.id ? 'flex-end' : 'none'
              }`,
            }}
            key={index}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'flex-end',
                flexDirection: 'column',
              }}
            >
              <div className='flex align-items-center'>
                <Avatar
                  sx={{ mr: 1, width: '34px', height: '34px' }}
                  src={item.avatar}
                  alt=''
                />
                <Grid
                  sx={{
                    backgroundColor: `${
                      currentUser === item.id
                        ? 'rgb(71, 130, 218)'
                        : 'rgba(0, 0, 0, 0.04)'
                    }`,
                    color: `${
                      currentUser === item.id
                        ? 'rgb(255, 255, 255)'
                        : 'rgba(0, 0, 0, 0.87)'
                    }`,
                    p: 1,
                    mb: 0.5,
                    borderRadius: '3px',
                    boxShadow: 'rgb(0 0 0 / 5%) 0px 1px 2px 0px',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: `${
                        currentUser === item.id ? 'flex-end' : 'flex-start'
                      }`,
                    }}
                  >
                    <Typography sx={{ fontSize: '13px', fontWeight: 600 }}>
                      {item.name}
                    </Typography>
                  </Box>
                  <Typography sx={{ fontSize: '0.8125rem' }} variant='body2'>
                    {item.content}
                  </Typography>
                </Grid>
              </div>
              <Typography
                sx={{ float: 'right', fontSize: '0.8125rem', opacity: 0.8 }}
                variant='body2'
              >
                {item.time}
              </Typography>
            </Box>
          </ListItem>
        ))}
      </List>
      <Divider />
      <Grid container sx={{ alignItems: 'center', p: 2.5 }}>
        <Grid item sx={{ width: '93%' }}>
          {' '}
          <Box sx={{ p: 0, '& > :not(style)': { width: '100%' } }} noValidate>
            <TextField
              value={inputText}
              id='outlined-basic'
              label='Type your message'
              fullwidth='true'
              onKeyUp={(e) => onKeyDown(e)}
              onChange={inputChange}
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
        </Grid>
        <Grid item sx={{ width: '7%' }}>
          <Box sx={{ ml: 1 }}>
            <Button
              id='submit-form'
              onClick={handleSubmit}
              sx={{
                p: 0,
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: 'rgb(55, 111, 208)',
                color: 'rgb(255,255,255)',
                minWidth: '0',
                '&:hover': { backgroundColor: 'rgb(38, 77, 145)' },
              }}
              disableRipple={true}
            >
              <SendIcon />
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default ChatContent;
