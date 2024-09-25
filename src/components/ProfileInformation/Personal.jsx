import PropTypes from 'prop-types';
import { Box, FormControlLabel, Radio, RadioGroup, styled, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';

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
    },
    '& .MuiFormHelperText-root': {
        fontFamily: 'IBM Plex Sans Thai',
    },
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

function Personal({ setFirstName, setLastName, setBirthDate, setEmail, setPhone, setGender, errors, gender }) {
    return (
        <Grid container spacing='16px'>
            <Grid size={6}>
                <CustomTextField
                    id='firstName'
                    label='ชื่อ'
                    onChange={(e) => setFirstName(e.target.value)}
                    variant='standard'
                    fullWidth
                    error={!!errors.firstName}
                    helperText={errors.firstName}
                />
            </Grid>
            <Grid size={6}>
                <CustomTextField
                    id='lastName'
                    label='นามสกุล'
                    onChange={(e) => setLastName(e.target.value)}
                    variant='standard'
                    fullWidth
                    error={!!errors.lastName}
                    helperText={errors.lastName}
                />
            </Grid>
            <Grid size={6}>
                <CustomTextField
                    id='birthDate'
                    label='วันเดือนปีเกิด'
                    type='date'
                    onChange={(e) => setBirthDate(e.target.value)}
                    variant='standard'
                    InputLabelProps={{
                        shrink: true,
                    }}
                    fullWidth
                    error={!!errors.birthDate}
                    helperText={errors.birthDate}
                />
            </Grid>
            <Grid size={6} sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-start' }}>
                <CustomFormBoxGender>
                    <CustomTypography>เพศ</CustomTypography>
                    <RadioGroup aria-label='gender' name='gender' value={gender} onChange={(e) => setGender(e.target.value)} row>
                        <CustomFormControlLabel value='male' control={<Radio />} label='ชาย' />
                        <CustomFormControlLabel value='female' control={<Radio />} label='หญิง' />
                    </RadioGroup>
                </CustomFormBoxGender>
            </Grid>
            <Grid size={6}>
                <CustomTextField
                    id='email'
                    label='อีเมล'
                    onChange={(e) => setEmail(e.target.value)}
                    variant='standard'
                    fullWidth
                    error={!!errors.email}
                    helperText={errors.email}
                />
            </Grid>
            <Grid size={6}>
            </Grid>
            <Grid size={6}>
                <CustomTextField
                    id='phone'
                    label='เบอร์โทรศัพท์'
                    onChange={(e) => setPhone(e.target.value)}
                    variant='standard'
                    fullWidth
                    error={!!errors.phone}
                    helperText={errors.phone}
                />
            </Grid>
        </Grid>
    )
}

Personal.propTypes = {
    setFirstName: PropTypes.func.isRequired,
    setLastName: PropTypes.func.isRequired,
    setBirthDate: PropTypes.func.isRequired,
    setEmail: PropTypes.func.isRequired,
    setPhone: PropTypes.func.isRequired,
    setGender: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    gender: PropTypes.string.isRequired,
};

export default Personal;