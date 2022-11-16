import { AppBar, Tooltip, Typography, Grid, Toolbar } from '@mui/material';
import React from 'react';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import LanguageIcon from '@mui/icons-material/Language';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Popover from '@mui/material/Popover';
import { alpha, styled } from '@mui/material/styles';
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
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
  },
}));
const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const id = open ? 'simple-popover' : undefined;
  return (
    <AppBar
      elevation={0}
      className='dashboard-content-background'
      position='sticky'
    >
      <Toolbar className='dashboard-content-toolbar'>
        <Grid container className='dashboard-content-grid'>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              className='dashboard-content-input'
              placeholder='Search topics...'
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Tooltip title='Messages'>
              <IconButton
                size='large'
                aria-label='message'
                color='inherit'
                aria-haspopup={true}
                aria-describedby={id}
                variant='contained'
              >
                <Badge badgeContent={3} color='primary'>
                  <ChatBubbleOutlineIcon onClick={handleClick} />
                </Badge>

                <Popover
                  id={id}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorReference='anchorPosition'
                  anchorPosition={{ top: 56, left: 1124 }}
                  anchorOrigin={{
                    vertical: 'center',
                    horizontal: 'left',
                  }}
                  transformOrigin={{
                    vertical: 'center',
                    horizontal: 'center',
                  }}
                >
                  <Typography sx={{ p: 2 }} component='h2'>
                    The content of the Popover.
                  </Typography>
                </Popover>
              </IconButton>
            </Tooltip>
            <Tooltip title='Notifications'>
              <IconButton
                size='large'
                aria-label='notifications'
                color='inherit'
                aria-haspopup={true}
              >
                <Badge badgeContent={7} color='primary'>
                  <NotificationsNoneIcon />
                </Badge>
              </IconButton>
            </Tooltip>
            <Tooltip title='Languages'>
              <IconButton
                size='large'
                aria-label='language'
                color='inherit'
                aria-haspopup={true}
              >
                <LanguageIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title='Account'>
              <IconButton
                size='large'
                aria-label='account'
                color='inherit'
                aria-haspopup={true}
              >
                <PowerSettingsNewIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
