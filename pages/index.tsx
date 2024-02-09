import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import NextLink from 'next/link';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import Contador  from '../src/components/Contador';
import backImage from '../public/img/background.jpg';
import { CardMedia } from '@mui/material';
import Player from '../src/components/Player';

export default function Home() {
  return (
  <Box sx={{
      position: 'absolute',
      background: `linear-gradient(to top, rgba(200, 200, 200, 0.133), rgba(11, 11, 12, 0.133)),url('/img/background.jpg')`,
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0'
      
    }}>
      <Header></Header>      
        <Container maxWidth="lg" >
          <Box
            color="primary"
            sx={{
              py: 4,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              // background: 'red'
              
            }}
          >
            <Contador></Contador>
          </Box>          
        </Container>
      <Player></Player>
      <Footer></Footer>
  </Box>
  );
}
