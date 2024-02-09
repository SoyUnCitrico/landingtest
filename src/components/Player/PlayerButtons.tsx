import { Box, IconButton, Typography } from "@mui/material"
import { Delete, PlayArrow} from "@mui/icons-material"
import Image, { StaticImageData } from "next/image"
import { useState } from "react"

type PlayerButtonsProps = {
    titulo: string
    text: string
    image: string | StaticImageData
    onClickedButton?: Function
    active?: boolean
}

const PlayerButtons = (props: PlayerButtonsProps) => {
    const[isActive, setIsActive] = useState(false);
    const [hovered, setHovered] = useState(false);

    return(
        <Box 
        onClick={() => {
            !!props?.onClickedButton ? props?.onClickedButton() : null
            setIsActive(!isActive)
        }}
        sx={{
            position:'relative',
            margin: {xs: '1rem', md: '1rem 1rem 2rem'},
            backgroundImage: `url(${props.image})`,
            width: {xs:'100px', md: '120px'},
            height: {xs:'100x', md: '120px'},
            // background: 'red'

            cursor: `${ 'pointer'}`
        }}>
            <Box sx={{
                display:`${isActive ? 'grid' : 'none'}`,
                // display: 'grid',
                position:'absolute',
                left: {xs: 'calc(5%)', md:'calc(10%)'},
                width: {xs: '100px', md:'100px'},
                height: {xs: '100px', md:'100px'},
                background: 'red',
                borderRadius: '50%',
                fontSize: {xs:'0.6rem', md:'0.7rem'},
                fontWeight: '700',
                color: '#f5f5f5',
                lineHeight: '0.7rem',
            }}>
                <p style={{padding: '12px 4px'}}>{props.text}</p>
            </Box>
            <Image
                src={props.image}
                width={100}
                height={100}
                alt="imagenClaro"
            />
            <Typography variant='body2' sx={{ paddingBottom: '1rem', fontSize: '0.85rem', color: '#f5f5f5'}}>{props.titulo.toUpperCase()}</Typography>
        </Box>
    )

}

export default PlayerButtons;