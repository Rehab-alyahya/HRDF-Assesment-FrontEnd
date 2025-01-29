
import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      sx={{
        backgroundColor: 'black',
        color: 'white',
        textAlign: 'center',
        padding: '20px',
        position: 'fixed',
        bottom: 0,
        width: '100%',
      }}
    >
      <Typography variant="body2" sx={{ margin: 0 }}>
        &copy; {currentYear} Riyadh Restaurants. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
