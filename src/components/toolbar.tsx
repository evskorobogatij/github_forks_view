import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import { useNavigate } from 'react-router-dom'

export const AppToolbar = (): JSX.Element => {
  const navigate = useNavigate()

  const goHome = () => {
    navigate('/')
  }
  return (
    <AppBar
      // position="fixed"
      color="primary"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{
            mr: 2,
            textDecoration: 'none'
          }}
          onClick={goHome}
        >
          <HomeIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Просмотр форков
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
