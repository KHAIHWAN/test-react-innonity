import { styled, TextField } from '@mui/material';
import Grid from '@mui/material/Grid2'

const Businesstype = [
    {
        value: 'ประเภทธุรกิจ',
        label: 'ประเภทธุรกิจ',
    },
    {
        value: 'นิติบุคคล',
        label: 'นิติบุคคล',
    },
    {
        value: 'เลือกตำเเหน่ง',
        label: 'เลือกตำเเหน่ง',
    }
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

function Company() {
    return (
        <Grid container spacing='16px'>
            <Grid size={12}>
                <CustomTextField
                    id=''
                    label='ชื่อบริษัท'
                    defaultValue='ชื่อบริษัท'
                    variant='standard'
                    fullWidth />
            </Grid>
            <Grid size={6}>
                <CustomTextField
                    id=''
                    label='เลขประจำตัวผู้เสียภาษี'
                    defaultValue='เลขประจำตัวผู้เสียภาษี'
                    variant='standard'
                    fullWidth />
            </Grid>
            <Grid size={6}>
                <CustomTextField
                    id=''
                    label='สำนักงาน/สาขาที่'
                    defaultValue='สำนักงาน/สาขาที่'
                    variant='standard'
                    fullWidth />
            </Grid>
            <Grid size={12}>
                <CustomTextField
                    id=''
                    label='ประเภทธุรกิจ'
                    defaultValue={Businesstype[0].value}
                    variant='standard'
                    fullWidth
                    select
                    slotProps={{
                        select: {
                          native: true,
                        },
                      }}>
                    {Businesstype.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </CustomTextField>
            </Grid>
            <Grid size={12}>
                <CustomTextField
                    id=''
                    label='รูปเเบบธุรกิจ'
                    defaultValue={Businesstype[1].value}
                    variant='standard'
                    fullWidth
                    select
                    slotProps={{
                        select: {
                          native: true,
                        },
                      }}>
                    {Businesstype.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </CustomTextField>
            </Grid>
            <Grid size={12}>
                <CustomTextField
                    id=''
                    label='ตำเเหน่งของคุณ'
                    defaultValue={Businesstype[2].value}
                    variant='standard'
                    fullWidth
                    select
                    slotProps={{
                        select: {
                          native: true,
                        },
                      }}>
                    {Businesstype.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </CustomTextField>
            </Grid>
        </Grid>
    )
}

export default Company