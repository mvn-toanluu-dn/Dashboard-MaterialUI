import React from 'react';
import IconButton from '@mui/material/IconButton';
import ListItemButton from '@mui/material/ListItemButton';

const buttonItem = (props) => {
  const {
    name,
    content,
    isDisableRipple,
    size,
    aria_label,
    color,
    aria_haspopup,
  } = props;
  return (
    <>
      <IconButton
        aria-label={aria_label}
        color={color}
        aria-haspopup={aria_haspopup}
        size={size}
        disableRipple={isDisableRipple}
      >
        {content}
      </IconButton>
    </>
  );
};

export default buttonItem;
