'use-client'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Image from 'next/image';
import MobilIcon from '../../../public/img/mobli-icon.png';
import FbIcon from '../../../public/img/logos/fb.png';
import TwIcon from '../../../public/img/logos/tw.png';
import YtIcon from '../../../public/img/logos/yt.png';
import LogoSochi from '../../../public/img/logo-sochi-color.png'
import ButtonRedes from '../ButtonRedes';
// import { Image } from 'next/image';

const Footer = () => {
    // const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    //     alignItems: 'flex-start',
    //     // paddingTop: theme.spacing(1),
    //     // paddingBottom: theme.spacing(2),
    //     // // Override media queries injected by theme.mixins.toolbar
    //     // '@media all': {
    //     //   minHeight: 128,
    //     // },
    //   }));

    return (
      <Box sx={{ flexGrow: 1 }} >
        <AppBar position="static">
            <Box 
                gap={1}
                sx={{
                // position:'absolute',
                // bottom: '0px',
                width: '100%',
                height: 'fit-content',
                // justifyItems:'space-between',
                // height: '120px',
                background: 'black',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1rem 1rem 2rem',
                borderTop: '2px solid gray',
                display: 'grid',
                gridTemplateColumns: {xs:'1fr', md:'1fr 1fr 1fr'},                
                placeItems: 'center',                                
            }}>
                <ButtonGroup variant="text" color={'warning'} aria-label="Basic button group">
                    <Button sx={{
                        color: '#f5f5f5',
                        textTransform: 'capitalize',
                        fontSize: '0.8rem',
                        fontWeight: 'bold',
                    }}>Aviso de Privacidad</Button>
                    <Button sx={{
                        color: '#f5f5f5',
                        textTransform: 'capitalize',
                        fontSize: '0.8rem',
                        fontWeight: 'bold',
                    }}>Contacto</Button>
                </ButtonGroup>

                <Button
                    size="large"
                    aria-label="display more actions"
                    // edge="end"
                    color="inherit"
                >
                    <Image
                        width={100}
                        height={40}
                        src={LogoSochi}
                        alt={'Logo Claro'}
                    />
                </Button>

                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center'
                    }}
                >
                    <ButtonRedes
                        backColor='#1DA1F2'
                        image={MobilIcon}
                        size={'28px'}
                    
                    />
                    <ButtonRedes
                        backColor='transparent'
                        image={TwIcon}
                    />
                     <ButtonRedes
                        backColor='transparent'
                        image={FbIcon}
                    />
                    <ButtonRedes
                        backColor='transparent'
                        image={YtIcon}
                    />
                </Box>
            </Box>
        </AppBar>
      </Box>
    );
  }

export default Footer;