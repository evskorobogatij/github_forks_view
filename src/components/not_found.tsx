import { Typography } from '@mui/material'
import { styled } from '@mui/system'

const NotFoundBox = styled('div')(()=>({
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  alignItems: 'center',
  justifyContent: 'center'
}))

export const NotFound = () => (
  <NotFoundBox>
    <Typography
      variant="h4"
      component={'div'}
      sx={{
        textAlign: 'center',
        color: (theme) => theme.palette.text.secondary
      }}
    >
      Репозиторий не найден
    </Typography>
  </NotFoundBox>
)
