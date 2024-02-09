'use-client'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Image from 'next/image';
import LogoClaro from '../../../public/img/logo-claro-sports.png'
import LogoSochi from '../../../public/img/logo-sochi-color.png'


const Header = () => {
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
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Box sx={{
                display: 'flex',
                width: '100%',
                justifyItems:'space-between',
                height: '120px',
                background: 'black',
                alignItems: 'end',
                justifyContent: 'space-between',
                padding: '0 1rem 1rem',
                borderBottom: '2px solid red'
                
            }}>
                <Button
                    size="large"
                    // edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    sx={{ mr: 2 }}
                >
                    <Image
                        width={100}
                        height={40}
                        src={LogoSochi}
                        alt={'Logo Claro'}
                    />
                </Button>

                <Button
                    size="large"
                    aria-label="display more actions"
                    // edge="end"
                    color="inherit"
                >
                    <Image
                        width={100}
                        height={40}
                        src={LogoClaro}
                        alt={'Logo Claro'}
                    />
                </Button>
            </Box>
        </AppBar>
      </Box>
    );
  }

export default Header;