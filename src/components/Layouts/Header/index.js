import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import SearchIcon from '@mui/icons-material/Search';
import {
  AppBar,
  Avatar,
  Button,
  Grid,
  List,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography
} from '@mui/material';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/material/styles';
import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../../i18n';
import ListMessage from '../../modules/ListMessage';
import ListNoti from '../../modules/ListNoti';
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 100,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    zIndex: 10,
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',

    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
    variant: 'outline',
  },
}));
const Header = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setAnchorEl4(null);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const [anchorEl3, setAnchorEl3] = React.useState(null);
  const [anchorEl4, setAnchorEl4] = React.useState(null);
  const open = Boolean(anchorEl);
  const open2 = Boolean(anchorEl2);
  const open3 = Boolean(anchorEl3);
  const open4 = Boolean(anchorEl4);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClick3 = (event) => {
    setAnchorEl3(event.currentTarget);
  };
  const handleClick4 = (event) => {
    setAnchorEl4(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };
  const handleClose3 = () => {
    setAnchorEl3(null);
  };
  const handleClose4 = () => {
    setAnchorEl4(null);
  };

  return (
    <AppBar
      elevation={0}
      className='dashboard-content-background'
      position='sticky'
      color='header'
      sx={{
        minHeight: '64px',
        borderRadius: 0,
      }}
    >
      <Toolbar className='dashboard-content-toolbar'>
        <Grid container className='dashboard-content-grid'>
          <Search sx={{ display: 'flex' }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              className='dashboard-content-input'
              placeholder={t('Search topics')}
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Tooltip title='Messages'>
              <IconButton
                size='large'
                aria-label='message'
                color='inherit'
                aria-controls={open ? 'message-menu' : undefined}
                aria-haspopup='true'
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                <Badge badgeContent={3} color='primary'>
                  <ChatBubbleOutlineIcon />
                </Badge>
              </IconButton>
            </Tooltip>
            <Menu
              elevation={0}
              id='message-menu'
              anchorEl={anchorEl}
              open={open}
              onClick={handleClose}
              onClose={handleClose}
              TransitionProps={{
                className: 'message-menu-list',
              }}
            >
              <Box className='message-title-box'>
                <Typography
                  className='message-title'
                  variant='subtilte1'
                  component='h6'
                >
                  3 New Messages
                </Typography>
              </Box>
              <List disablePadding={true}>
                <ListMessage />
              </List>
              <Box className='message-btn-box'>
                <Button
                  disableRipple={true}
                  disableTouchRipple={true}
                  disableFocusRipple={true}
                  component='a'
                  href='/#'
                  size='small'
                  className='message-btn-box-content'
                >
                  Show all messages
                </Button>
              </Box>
            </Menu>
            <Tooltip title='Notifications'>
              <IconButton
                size='large'
                aria-label='notifications'
                color='inherit'
                aria-controls={open3 ? 'notification-menu' : undefined}
                aria-haspopup='true'
                aria-expanded={open3 ? 'true' : undefined}
                onClick={handleClick3}
              >
                <Badge badgeContent={7} color='primary'>
                  <NotificationsNoneIcon />
                </Badge>
              </IconButton>
            </Tooltip>
            <Menu
              elevation={0}
              id='notification-menu'
              anchorEl={anchorEl3}
              open={open3}
              onClick={handleClose3}
              onClose={handleClose3}
              TransitionProps={{
                className: 'notification-menu-list',
              }}
            >
              <Box className='notification-title-box'>
                <Typography
                  className='notification-title'
                  variant='subtilte1'
                  component='h6'
                >
                  7 New Notifications
                </Typography>
              </Box>
              <List disablePadding={true}>
                <ListNoti />
              </List>
              <Box className='notification-btn-box'>
                <Button
                  disableRipple={true}
                  disableTouchRipple={true}
                  disableFocusRipple={true}
                  component='a'
                  href='/#'
                  size='small'
                  className='notification-btn-box-content'
                >
                  Show all messages
                </Button>
              </Box>
            </Menu>
            <Tooltip title='Languages'>
              <IconButton
                size='large'
                aria-label='language'
                color='inherit'
                onClick={handleClick4}
                aria-controls={open4 ? 'language-menu' : undefined}
                aria-haspopup='true'
                aria-expanded={open4 ? 'true' : undefined}
              >
                <Avatar
                  sx={{ width: '22px', height: '22px' }}
                  src={t('avatar')}
                  alt=''
                />
              </IconButton>
            </Tooltip>
            <Menu
              elevation={0}
              id='language-menu'
              anchorEl={anchorEl4}
              open={open4}
              onClose={handleClose4}
            >
              <MenuItem onClick={() => changeLanguage('en')}>English</MenuItem>
              <MenuItem onClick={() => changeLanguage('fr')}>French</MenuItem>
              <MenuItem onClick={() => changeLanguage('de')}>German</MenuItem>
              <MenuItem onClick={() => changeLanguage('du')}>Dutch</MenuItem>
            </Menu>
            <Tooltip title='Account'>
              <IconButton
                size='large'
                aria-label='account'
                color='inherit'
                onClick={handleClick2}
                aria-controls={open2 ? 'account-menu' : undefined}
                aria-haspopup='true'
                aria-expanded={open2 ? 'true' : undefined}
              >
                <PowerSettingsNewIcon />
              </IconButton>
            </Tooltip>
            <Menu
              elevation={0}
              id='account-menu'
              anchorEl={anchorEl2}
              open={open2}
              onClick={handleClose2}
              onClose={handleClose2}
            >
              <MenuItem onClick={handleClose2}>Profile</MenuItem>
              <MenuItem onClick={handleClose2}>Logout</MenuItem>
            </Menu>
          </Box>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
