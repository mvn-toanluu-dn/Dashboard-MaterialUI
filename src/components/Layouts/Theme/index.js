import React from 'react';
// import { ThemeProvider, createTheme } from '@mui/material/styles';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import { Button } from '@mui/material';
const Theme = () => {
    
  return (
    <Button disableRipple={true} size='large' className='button-theme'>
      <ColorLensIcon fontSize='medium' />
    </Button>
  );
};

export default Theme;
