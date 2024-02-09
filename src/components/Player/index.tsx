import { Box, Container, Card, CardMedia, CardActions, Typography } from "@mui/material";
import PlayerButtons from "./PlayerButtons";
import TeamLatam from '../../../public/img/team-latam.png';
import TravelMeets from '../../../public/img/travel-meets-fashion.png';
import Velocidad from '../../../public/img/velocidad-riesgo.png';
import Experiencia from '../../../public/img/experiencia.png';
import ReactPlayer from "react-player";
import { useEffect, useState } from "react";


type PlayerProps = {
    videos?: Array<string>
}
const Player = () => {
    const videosInit = [
        {
            url: 'https://www.youtube.com/watch?v=l30Ua6KTEfM',
            texto: 'Los deportistas latinoamericanos que participarán en Sochi 2014',
            titulo: 'Team Latam',
            image: TeamLatam
        },
        {
            url: 'https://www.youtube.com/watch?v=CGnL0c-g2rI',
            texto: 'Los deportistas latinoamericanos que participarán en Sochi 2024',
            titulo: 'Travel Meets',
            image: TravelMeets
        },
        {
            url: 'https://www.youtube.com/watch?v=l30Ua6KTEfM',
            texto: 'Los deportistas latinoamericanos que participarán en Sochi 2034',
            titulo: 'velocidad y Riesgo',
            image: Velocidad
        },
        {
            url: 'https://www.youtube.com/watch?v=CGnL0c-g2rI',
            texto: 'Los deportistas latinoamericanos que participarán en Sochi 2044',
            titulo: 'Experiencia',
            image: Experiencia
        },
    ]
    const[actualVideo, setActualVideo] = useState('')
    const[ videosArray, setVideosArray] = useState<any>([]);


    useEffect(() => {
        if(videosInit.length > 0) {
            setVideosArray(videosInit)
        }
    }, [videosInit])

    return(
        <Card elevation={0} sx={{
            position: 'relative',
            width: '100%',
            background: 'transparent',
            minHeight: '400px',
            // position: 'absolute',
            // bottom: 'calc(15%)'
        }}>
            <Box sx={{
                display: 'grid',
                placeItems: 'center',
                minHeight:'480px',
                marginTop: '-2rem'
                // background: 'red',
            }}>
                {/* <ReactPlayer
                    url={videosArray[0]?.url}
                    style={{
                        zIndex:'1',
                    }}
                /> */}
            </Box>
            <Box sx={{
                // position:'absolute',
                // bottom: '0',
                // top: '0',
                width: '100%',
                textAlign: 'center',
                background: '#232323',
            }}>
                <Typography variant="h5" sx={{color: '#f5f5f5', paddingTop: '1rem'}}>CLARO SPORTS EN SOCHI 2014</Typography>
                <Box sx={{
                    display: 'flex',
                    width: '100%',
                    // background: 'red',
                    flexDirection: {xs: 'column', md:'row'},
                    alignItems: 'center',
                    justifyContent: {xs: 'center', md: 'space-evenly',}

                }}>
                  {
                    videosArray.length > 0 ?
                    videosArray.map((video: any, index:number) => {
                        return(                        
                        <PlayerButtons
                            key={index}
                            titulo={video.titulo}
                            text={video.texto}
                            image={video.image}
                        />)
                    })
                    : <></>
                  }

                </Box>
            </Box>
        </Card>

    )

}

export default Player;