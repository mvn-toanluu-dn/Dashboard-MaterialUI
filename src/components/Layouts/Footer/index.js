import { Grid, List, ListItemButton, ListItemText } from '@mui/material';
import React from 'react';
import { footer } from '../../../utils/data/data';
const Footer = () => {
  return (
    <div className='footer'>
      <Grid container>
        <Grid item xs={12} md={6}>
          <List>
            {footer.map((item, index) => {
              return (
                <ListItemButton
                  sx={{ display: 'inline-block', p: 1 }}
                  disableRipple={true}
                  component='a'
                  href='/#'
                  key={index}
                >
                  <ListItemText className='footer-left' primary={item.title} />
                </ListItemButton>
              );
            })}
          </List>
        </Grid>
        <Grid item xs={12} md={6}>
          <List>
            <ListItemButton>
              <ListItemText
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                }}
                primary='© 2022 - Mira'
                className='footer-right'
              />
            </ListItemButton>
          </List>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
