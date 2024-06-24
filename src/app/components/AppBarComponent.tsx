import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
// import { animateScroll as scroll } from 'react-scroll';

const AppBarComponent: React.FC = () => {
//   const scrollToTop = () => {
//     scroll.scrollToTop();
//   };

  return (
    <AppBar position="fixed" sx={{ background: 'rgba(0,0,0,0.7)' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          NFT Collection
        </Typography>
        <Button color="inherit">
          Back to Top
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarComponent;
