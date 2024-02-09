import Button from "@mui/material/Button";
import Image, { StaticImageData } from "next/image";

type ButtonProps = {
    image: string | StaticImageData
    backColor: string
    link?: string
    size?: string
}
const ButtonRedes = (props: ButtonProps) => {
    return(
        <Button
            size="small"
            sx={{
                height: `${!!props?.size ? props?.size : '32px'}`,
                width: `${!!props?.size ? props?.size : '32px'}`,
                minWidth: '26px',    
                // padding: '2px',
                margin: '2px',
                backgroundColor: `${props.backColor}`,                            
            }}
            href={props?.link ?? '/'}
            // target='_blank'
        >
            <Image
                src={props.image}
                width={26}
                height={26}
                alt='Icono'
            />
        </Button>
    )
}

export default ButtonRedes;