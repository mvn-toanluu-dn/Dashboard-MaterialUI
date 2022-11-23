import {
  Breadcrumbs,
  Card,
  Divider,
  Grid,
  Link,
  Paper,
  Typography,
} from '@mui/material';
import React from 'react';
import ChatContent from '../../components/ChatContent';
import ChatSideBar from '../../components/ChatSideBar';

const Chat = () => {
  return (
    <Paper className='dashboard-content-main chat' elevation={0}>
      <Typography className='dashboard-main-title title' variant='h3'>
        Chat
      </Typography>
      <Breadcrumbs aria-label='breadcrumb'>
        <Link underline='hover' color='primary' href='/*'>
          Dashboard
        </Link>
        <Link underline='hover' color='primary' href='/*'>
          Pages
        </Link>
        <Typography fontSize='small' color='text.primary'>
          Chat
        </Typography>
      </Breadcrumbs>
      <Divider className='dashboard-content-hr divider' />
      <Card elevation={0} sx={{ display: 'flex', height: '65vh' }}>
        <Grid
          item
          xs={12}
          md={4}
          lg={3}
          sx={{ borderRight: '1px solid rgba(0, 0, 0, 0.12)' }}
        >
          <ChatSideBar />
        </Grid>
        <Grid item xs={12} md={8} lg={9}>
          <ChatContent />
        </Grid>
      </Card>
    </Paper>
  );
};

export default Chat;
