import { styled, TextField } from '@mui/material';
import Grid from '@mui/material/Grid2'

const Address = [
    {
        value: 'จังหวัด',
        label: 'เลือกจังหวัด',
    },
    {
        value: 'เขต / อำเภอ',
        label: 'เลือกเขต / อำเภอ',
    },
    {
        value: 'เเขวง / ตำบล',
        label: 'เลือกเเขวง / ตำบล',
    },

]

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

function ContactAddress() {
  return (
    <Grid container spacing='16px'>
            <Grid size={6}>
                <CustomTextField
                    id=''
                    label='ที่อยู่'
                    defaultValue='ที่อยู่'
                    variant='standard'
                    fullWidth />
            </Grid>
            <Grid size={6}>
                <CustomTextField
                    id=''
                    label='หมู่ที่'
                    defaultValue='หมู่ที่ (ถ้าไม่มีข้อมูลให้้ใส่ - ในช่องว่าง)'
                    variant='standard'
                    fullWidth />
            </Grid>
            <Grid size={6}>
                <CustomTextField
                    id=''
                    label='จังหวัด'
                    defaultValue={Address[0].value}
                    variant='standard'
                    fullWidth
                    select >
                    {Address.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </CustomTextField>
            </Grid>
            <Grid size={6}>
                <CustomTextField
                    id=''
                    label='เขต / อำเภอ'
                    defaultValue={Address[1].value}
                    variant='standard'
                    fullWidth
                    select  >
                    {Address.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </CustomTextField>
            </Grid>
            <Grid size={6}>
                <CustomTextField
                    id=''
                    label='เเขวง / ตำบล'
                    defaultValue={Address[2].value}
                    variant='standard'
                    fullWidth
                    select  >
                    {Address.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </CustomTextField>
            </Grid>
            <Grid size={6}>
                <CustomTextField
                    id=''
                    label='รหัสไปรษณีย์'
                    defaultValue='รหัสไปรษณีย์'
                    variant='standard'
                    fullWidth />
            </Grid>
        </Grid>
  )
}

export default ContactAddress