import {
  Container,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput
} from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear'
import { styled } from '@mui/system'
import { useState } from 'react'

const MainContainer = styled(Container)(() => ({
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}))

export const Main = () => {
  const [search, setSearch] = useState('')

  const clearSearch = () => {
    setSearch('')
  }
  return (
    <MainContainer>
      <FormControl variant={'outlined'} fullWidth /*className={classes.find} */>
        <InputLabel htmlFor={'printer-find'}>Поиск</InputLabel>
        <OutlinedInput
          id={'employee-find'}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          label={'Поиск'}
          placeholder={
            'Введите имя репозитория в формате владелец/имя_репозитория и нажмите <Enter>'
          }
          endAdornment={
            <>
              {search && (
                <InputAdornment position={'end'}>
                  <IconButton onClick={() => clearSearch()} size="large">
                    <ClearIcon />
                  </IconButton>
                </InputAdornment>
              )}
            </>
          }
        />
      </FormControl>
    </MainContainer>
  )
}
