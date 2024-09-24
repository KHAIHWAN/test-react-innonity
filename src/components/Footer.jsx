import { AppBar, Typography } from "@mui/material"

function Footer() {
    return (
        <AppBar position="static"
            sx={{
                width: 'Fixed (1,440px)px',
                height: 'Hug (66px)px',
                padding: '20px 80px 20px 80px',
                gap: '30px',
                opacity: '0px',
                backgroundColor: '#000000',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            <Typography 
                fontFamily='IBM Plex Sans Thai'
                fontWeight='400'
                fontSize='16px'
                lineHeight='26.4px'>
                    All rights reserved.
                </Typography>
        </AppBar>
    )
}

export default Footer