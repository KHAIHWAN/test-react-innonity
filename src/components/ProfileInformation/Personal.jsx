import { Box, FormControlLabel, Radio, RadioGroup, styled, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2'

const CustomTextField = styled(TextField)({
    '& .MuiInputLabel-root': {
        fontFamily: 'IBM Plex Sans Thai',
    },
    '& .MuiInput-root': {
        fontSize: '16px',
        fontWeight: '400',
        fontFamily: 'IBM Plex Sans Thai',
        lineHeight: '26.4px',
        color: '#888888'
    }
});

const CustomFormBoxGender = styled(Box)({
    height: '42px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '8px',
})

const CustomTypography = styled(Typography)({
    fontSize: '16px',
    fontWeight: '400',
    fontFamily: 'IBM Plex Sans Thai',
    color: '#000000',
    lineHeight: '26.4px',
})

const CustomFormControlLabel = styled(FormControlLabel)({
    '& .MuiTypography-root ': {
        fontFamily: 'IBM Plex Sans Thai',
    },
})

function Personal() {
    return (
        <Grid container spacing='16px'>
            <Grid size={6}>
                <CustomTextField
                    id=''
                    label='ชื่อ'
                    defaultValue='ชื่อ'
                    variant='standard'
                    fullWidth />
            </Grid>
            <Grid size={6}>
                <CustomTextField
                    id=''
                    label='นามสกุล'
                    defaultValue='นามสกุล'
                    variant='standard'
                    fullWidth />
            </Grid>
            <Grid size={6}>
                <CustomTextField
                    label='วันเดือนปีเกิด'
                    type='date'
                    variant='standard'
                    InputLabelProps={{
                        shrink: true,
                    }}
                    fullWidth
                />
            </Grid>
            <Grid size={6} sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-start' }}>
                <CustomFormBoxGender>
                    <CustomTypography>เพศ</CustomTypography>
                    <RadioGroup aria-label='anonymous' name='anonymous' defaultValue='male' row>
                        <CustomFormControlLabel value='male' control={<Radio />} label='ชาย' />
                        <CustomFormControlLabel value='female' control={<Radio />} label='หญิง' />
                    </RadioGroup>
                </CustomFormBoxGender>
            </Grid>
            <Grid size={6}>
                <CustomTextField
                    id=''
                    label='อีเมล'
                    defaultValue='อีเมล'
                    variant='standard'
                    fullWidth />
            </Grid>
            <Grid size={6}>
            </Grid>
            <Grid size={6}>
                <CustomTextField
                    id=''
                    label='เบอร์โทรศัพท์'
                    defaultValue='เบอร์โทรศัพท์'
                    variant='standard'
                    fullWidth />
            </Grid>
        </Grid>
    )
}

export default Personal