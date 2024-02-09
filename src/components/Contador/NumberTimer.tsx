import { Typography, Box } from "@mui/material";
type NumberProps = {
    number: string,
    name: string
}
const NumberTimer = (props: NumberProps) => {

    return(
    <Box sx={{
        margin: {xs:'8px 4px', md: '16px 8px'}
    }}>
        <Box sx={{
        display: 'grid',
        placeItems: 'center',
        width: {xs:'60px', md:'90px'},
        height: {xs:'60px', md: '90px'},
        borderRadius: '50%',
        // background: 'black', 
        border: '1px solid #f5f5f5'
    }}>
            <Typography sx={{fontWeight: '700', fontSize: {xs:'1.4rem', md:'2.2rem'}, color:'#f5f5f5', margin: {xs:'0px', md:'-5px'}}}>{props.number}</Typography>
            <Typography sx={{fontWeight: '900', fontSize: {xs:'0.8rem', md:'1rem'}, color:'#f5f5f5', marginTop: {xs:'-24px', md:'-32px'}}}>{props.name.toUpperCase()}</Typography>
        </Box>
        
    </Box>)
}

export default NumberTimer;