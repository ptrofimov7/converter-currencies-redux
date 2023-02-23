import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import React from 'react';

const Header = () => {
   return (
      <Box className="header">
      <AppBar position="static" sx={{height: '100%', justifyContent: 'center'}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Currency convertor
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
   );
};

export default Header;