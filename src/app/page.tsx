import React from 'react';
import dynamic from 'next/dynamic';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import AppBarComponent from './components/AppBarComponent';
import { Section } from './components/HomeClient';
import theme from './theme';

const HomeClient = dynamic(() => import('./components/HomeClient'), { ssr: false });


const sections: Section[] = [
  {
    title: 'Exclusive NFT Collection',
    content: 'Step into a world of unique digital art. Our NFTs are your gateway to an exclusive community and future opportunities.',
    image: './images/1.png',
  },
  {
    title: 'Rarity & Value',
    content: 'Each NFT is a masterpiece, ranked by rarity. Own a piece of digital history that grows in value over time.',
    image: './images/2.png',
  },
  {
    title: 'Utility & Perks',
    content: 'Your NFT is more than art - its a key to exclusive events, merchandise, and future drops.',
    image: './images/3.png',
  },
  {
    title: 'Vibrant Community',
    content: 'Join a thriving network of collectors, artists, and innovators. Your NFT is your membership to an elite circle.',
    image: './images/4.png',
  },
  {
    title: 'Limited Minting',
    content: 'Dont miss out on this groundbreaking collection. Mint your NFT now before theyre gone forever!',
    image: './images/5.png',
  },
];

const Home: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{
        minHeight: '100vh',
        background: 'linear-gradient(45deg, #4ECDC4, #FF6B6B)',
      }}>
        <AppBar position="fixed" color="transparent" elevation={0}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
              CryptoArt NFTs
            </Typography>
            <Button color="inherit">Collection</Button>
            <Button color="inherit">Roadmap</Button>
            <Button color="inherit">FAQ</Button>
            <Button variant="contained" color="secondary" sx={{ ml: 2 }}>
              Connect Wallet
            </Button>
          </Toolbar>
        </AppBar> 
        <HomeClient sections={sections} />
      </Box>
    </ThemeProvider>
  );
};

export default Home;