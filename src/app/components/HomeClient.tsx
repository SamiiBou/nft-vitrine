'use client'

import React from 'react';
import { Box, Typography, Button, AppBar, Toolbar } from '@mui/material';
import { motion } from 'framer-motion';
import { Parallax } from 'react-parallax';

const Header = () => (
  <AppBar position="fixed" color="transparent" elevation={0}>
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        CryptoArt NFTs
      </Typography>
      <Button color="inherit">COLLECTION</Button>
      <Button color="inherit">ROADMAP</Button>
      <Button color="inherit">FAQ</Button>
      <Button variant="contained" color="secondary">
        CONNECT WALLET
      </Button>
    </Toolbar>
  </AppBar>
);

const MainSection = () => (
  <Parallax
    blur={0}
    bgImage="/images/back.jpg"
    strength={500}
    style={{ height: '100vh', opacity: '0.5' }}
  >
    <Box sx={{ height: '100vh' }} />
  </Parallax>
);

const AnimatedCharacter = ({ src, position }) => (
  <motion.div
    initial={{ opacity: 0, [position]: -100 }}
    animate={{ opacity: 1, [position]: 0 }}
    transition={{ delay: 1, duration: 1 }}
    style={{
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      [position]: 0,
      width: '30%',
      height: '80%',
      backgroundImage: `url(${src})`,
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}
  />
);

const CentralContent = () => (
  <Box
    sx={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      textAlign: 'center',
      zIndex: 1, // Assurez-vous que ce contenu est au-dessus du fond
    }}
  >
    <motion.div
      initial={{ opacity: 0, scale: 0.5, z: -100 }}
      animate={{ opacity: 1, scale: 1, z: 0 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      <Box
        component="img"
        src="/images/logo1-.png"  
        alt="NFT Brand Logo"
        sx={{ 
          width: { xs: '200px', md: '400px' },
          height: 'auto',
          marginBottom: 4
        }}
      />
    </motion.div>

    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <Button 
        variant="contained" 
        size="large"
        sx={{
          backgroundColor: '#FF6B6B',
          '&:hover': {
            backgroundColor: '#FF8E8E',
          },
          fontWeight: 'bold',
          px: 4,
          py: 2,
        }}
      >
        EXPLORE COLLECTION
      </Button>
    </motion.div>
  </Box>
);

const HomePage = () => (
  <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', position: 'relative' }}>
    <Header />
    <MainSection />
    <CentralContent />
    <AnimatedCharacter src="/images/girl.png" position="left" />
    <AnimatedCharacter src="/images/man.png" position="right" />
  </Box>
);

export default HomePage;