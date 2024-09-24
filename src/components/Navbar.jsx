import { AppBar, Avatar, Badge, Box, IconButton, Link, styled } from "@mui/material"
import Grid from '@mui/material/Grid2'

import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'

const CustomLink = styled(Link)({
    color: '#000000',
    fontSize: '16px',
    fontWeight: '400',
    fontFamily: 'IBM Plex Sans Thai',
    lineHeight: '26.4px',
    '&:hover': {
        color: '#888888'
    }
})

const MenuBar = ['คอร์ส', 'กลุ่มคอร์สเรียน', 'สร้างคอร์สออนไลน์', 'Video Content', 'วิธีสั่งซื้อ', 'เเจ้งชำระเงิน']

function Navbar() {
    return (
        <AppBar position="static" color="#FFFFFF" 
            sx={{
                height: '98px',
                padding: '24px 80px 24px 80px',
                borderBottom: '1px solid #F2F3F8',
                boxShadow: '0px 2px 12px 0px #14142B26',
                display: 'flex',
                justifyContent: 'center'
            }}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                height: '48px'
            }}>

                <Grid container spacing='10px'>
                    {MenuBar.map((item, index) => (
                        <Grid key={index}>
                            <CustomLink href="#" underline="none">{item}</CustomLink>
                        </Grid>
                    ))}
                </Grid>
                <Grid container spacing='10px'>
                    <Grid>
                        <IconButton>
                            <Badge variant="dot" color="primary">
                                <NotificationsNoneOutlinedIcon />
                            </Badge>
                        </IconButton>
                    </Grid>
                    <Grid>
                        <Avatar alt="Remy Sharp" src="https://s3-alpha-sig.figma.com/img/0510/6111/b87778000c8d3d713a4cf8b6d13160f3?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NEkSCLgqgRH~kNP3qeCaJwVffkiuNdPWC7RUcu-U0tVd5MWw4p0Q0BbvBp44XGucBJWGnmBM5pppdFLpqH64ji8g7O57mzqfhN9xtxwtrQjDca0XLKwpWvox0vdAdQmhpRFgmANruUG9UaFtxQ9yYNpNpwEqxn0qvItdmAp46NMdxpRxEeK1SLdsKVuA~EwDmNQmODrjRYgKsv7pyk24tLts1EMGaxZQHzZYm1cofmAPQLkqyOx8FJIRcWirfrBa4AKCUgiT5Y5wCutqp3e-npucMNnHn9HNgoyBUb00EpNmdanpYRMIrAyYtMOGdzwnSG1~gOpPMoU3XFswmPdhdA__" />
                    </Grid>
                </Grid>
            </Box>
        </AppBar>
    )
}

export default Navbar