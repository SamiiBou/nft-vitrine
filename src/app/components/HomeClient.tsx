'use client';

import React, { useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Box, Typography, Button, Container, Grid } from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faCrown, faGem, faUsers, faClock } from '@fortawesome/free-solid-svg-icons';
import image from '../images/man.png'

const theme = createTheme({
  palette: {
    primary: {
      main: '#4ECDC4',
    },
    secondary: {
      main: '#FF6B6B',
    },
    background: {
      default: '#f0f0f0',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Arial", sans-serif',
  },
});

export type Section = {
  title: string;
  content: string;
  image: string;
  icon: string;
};

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'rocket': return faRocket;
    case 'crown': return faCrown;
    case 'gem': return faGem;
    case 'users': return faUsers;
    case 'clock': return faClock;
    default: return faRocket;
  }
};

const NFTCard = ({ nft }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    style={{
      background: 'white',
      borderRadius: '20px',
      padding: '20px',
      boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
    }}
  >
    <img src={nft.image} alt={nft.name} style={{ width: '100%', borderRadius: '10px' }} />
    <Typography variant="h6" style={{ marginTop: '10px' }}>{nft.name}</Typography>
    <Button variant="contained" color="secondary" fullWidth style={{ marginTop: '10px' }}>
      Mint Now
    </Button>
  </motion.div>
);

interface HomeClientProps {
  sections: Section[];
}

const HomeClient: React.FC<HomeClientProps> = ({ sections }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start(i => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3 }
    }));
  }, [controls]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ParallaxProvider>
      <Parallax y={[-20, 20]} tagOuter="figure">
        <Box id='thisOne'
          sx={{
            position :'absolute',
            height: '100vh',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundSize: 'contain',
          }}
        >
          <Box
            sx={{
              width: '22%',
              height: '100%',
              backgroundImage: 'url("/images/girl.png")',
              backgroundSize: 'contain',
              backgroundPosition: 'left',
              backgroundRepeat: 'no-repeat',
            }}
          />

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: '56%', // Adjust width to ensure space between the images
            }}
          >
            <Typography variant="h1" align="center" style={{ color: 'white', marginBottom: '20px' }}>
              Welcome to the Future of Art
            </Typography>
            <Button variant="contained" color="secondary" size="large">
              Explore Collection
            </Button>
          </Box>

          <Box
            sx={{
              position: 'absolute',
              top: '-7%',
              left: '75%',
              width: '22%',
              height: '100%',
              backgroundImage: 'url("/images/man.png")',
              backgroundSize: 'contain',
              backgroundPosition: 'right',
              backgroundRepeat: 'no-repeat',
            }}
          />
        </Box>
      </Parallax>


        <Container>
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
              custom={index}
            >
              <Box sx={{ my: 8, display: 'flex', alignItems: 'center' }}>
                <FontAwesomeIcon icon={getIcon(section.icon)} size="3x" color={theme.palette.secondary.main} />
                <Box sx={{ ml: 4 }}>
                  <Typography variant="h4" gutterBottom>{section.title}</Typography>
                  <Typography variant="body1">{section.content}</Typography>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Container>

        <Box sx={{ my: 8, bgcolor: 'background.paper', py: 8 }}>
          <Container>
            <Typography variant="h2" align="center" gutterBottom>
              Featured NFTs
            </Typography>
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={'auto'}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              navigation={true}
              modules={[EffectCoverflow, Pagination, Navigation]}
            >
              {[1, 2, 3, 4, 5].map((nft) => (
                <SwiperSlide key={nft}>
                  <NFTCard nft={{ name: `CryptoArt #${nft}`, image: `/path/to/nft-${nft}.jpg` }} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Container>
        </Box>

        <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 8 }}>
          <Container>
            <Typography variant="h2" align="center" gutterBottom>
              Join the CryptoArt Revolution
            </Typography>
            <Typography variant="h5" align="center" paragraph>
              Don't miss your chance to own a piece of digital history.
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Button variant="contained" color="secondary" size="large">
                Mint Your NFT Now
              </Button>
            </Box>
          </Container>
        </Box>
      </ParallaxProvider>
    </ThemeProvider>
  );
};

export default HomeClient;