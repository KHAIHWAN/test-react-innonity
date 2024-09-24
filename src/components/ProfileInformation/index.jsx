import { Box, Button, Card, Checkbox, FormControlLabel, FormGroup, styled } from "@mui/material"
import Grid from '@mui/material/Grid2'

import Profile from "./Profile"
import Personal from "./Personal"
import Company from "./Company"
import CompanyAddress from "./CompanyAddress"
import ContactAddress from "./ContactAddress"

const CustomBackground = styled(Box)({
    background: 'linear-gradient(180deg, #1877F2 -9.41%, rgba(255, 255, 255, 0) 26.31%)',
    padding: '80px 140px 80px 140px'
})

const CustomCard = styled(Card)({
    height: 'Hug (1,744px)',
    width: '100%',
    padding: '24px',
    borderRadius: '12px',
    boxShadow: '0px 2px 12px 0px #00000026'
})

const CustomH1 = styled('h1')({
    fontSize: '24px',
    fontWeight: '700',
    fontFamily: 'IBM Plex Sans Thai',
    lineHeight: '38.4px',
    color: '#000000'
})

const CustomH2 = styled('h2')({
    fontSize: '18px',
    fontWeight: '700',
    fontFamily: 'IBM Plex Sans Thai',
    color: '#000000',
    marginBottom: '16px'
})

const CustomH3 = styled('h3')({
    fontSize: '18px',
    fontWeight: '700',
    fontFamily: 'IBM Plex Sans Thai',
    color: '#000000',
    marginBottom: '15px'
})

const CustomFormControlLabel = styled(FormControlLabel)({
    '& .MuiTypography-root': {
        fontFamily: 'IBM Plex Sans Thai',
    },
    marginBottom: '15px'
})

const CustomButton = styled(Button)({
    width: '136px',
    height: '42px',
    borderRadius: '8px',
    padding: '8px, 16px, 8px, 16px',
    gap: '8px',
    fontFamily: 'IBM Plex Sans Thai',
    fontSize: '16px',
    fontWeight: '700',
    lineHeight: '26.4px',
})


function Content() {
    return (
        <CustomBackground >
            <CustomCard>
                <Grid container direction='column' spacing={4}>
                    <CustomH1>ข้อมูลส่วนตัว</CustomH1>
                    <Grid>
                        <CustomH2>รูปโปรไฟล์</CustomH2>
                        <Profile />
                    </Grid>
                    <Grid>
                        <CustomH3>ข้อมูลส่วนตัว</CustomH3>
                        <Personal />
                    </Grid>
                    <Grid>
                        <CustomH3>ข้อมูลบริษัท</CustomH3>
                        <Company />
                    </Grid>
                    <Grid>
                        <CustomH3>ที่อยู่บริษัท (ตามหนังสือรับรอง)</CustomH3>
                        <CompanyAddress />
                    </Grid>
                    <Grid>
                        <CustomH3>ที่อยู่ที่สามารถติดต่อได้ (ส่งเอกสาร)</CustomH3>
                        <FormGroup>
                            <CustomFormControlLabel control={<Checkbox />} label="ใช้ตามที่อยู่บริษัท" />
                        </FormGroup>
                        <ContactAddress />
                    </Grid>
                    <Grid sx={{
                        display: 'flex',
                        justifyContent: 'flex-end'
                    }}>
                        <CustomButton variant='contained' color='primary'>
                            บันทึก
                        </CustomButton>
                    </Grid>
                </Grid>
            </CustomCard>
        </CustomBackground>
    )
}

export default Content