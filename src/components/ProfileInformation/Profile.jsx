import { Box, Button, Typography, styled } from '@mui/material'
import Grid from '@mui/material/Grid2'

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const RequirementsUpload = ['ไฟล์ที่รองรับ: PNG, JPG ', 'ขนาดไฟล์สูงสุด: 1 MB', 'ขนาดเเนะนำ: 500 x 500  px', 'อัตราส่วนภาพ: 1 : 1']

const CustomTypography = styled(Typography)({
    fontSize: '14px',
    fontWeight: '400',
    fontFamily: 'IBM Plex Sans Thai',
    textTransform: 'none',
    color: '#1877F2',
})

const CustomH3 = styled('h3')({
    fontSize: '12px',
    fontWeight: '400',
    fontFamily: 'IBM Plex Sans Thai',
    color: '#888888',
})

function Profile() {
  return (
    <Grid container spacing='10px'>
        <Grid>
            <Button sx={{
                width: '104px',
                height: '104px',
                border: '1px dotted #888888',
                borderRadius: '12px',
                display: 'flex',
                justifyContent: 'center',
            }}>
                <Box sx={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center',
                }}>
                    <AddCircleOutlineIcon sx={{ width: '14.33px', height: '14.33px' }} />
                    <CustomTypography>Upload</CustomTypography>
                </Box>
            </Button>
        </Grid>
        <Grid>
            <Grid container direction='column' spacing='8px'>
                {RequirementsUpload.map((item, index) => (
                    <Grid key={index}>
                        <CustomH3>{item}</CustomH3>
                    </Grid>
                ))}
            </Grid>
        </Grid>
    </Grid>
  )
}

export default Profile