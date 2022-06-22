import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput
} from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear'
import { KeyboardEvent, useEffect, useState } from 'react'
import { useNavigate, createSearchParams } from 'react-router-dom'

export const SearchLine = () => {
  const [search, setSearch] = useState('')
  const [isError, setIsError] = useState(false)
  const navigate = useNavigate()

  const clearSearch = () => {
    setSearch('')
  }

  const handleKeys = (
    e: KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    if (e.key === 'Enter') handleSearch()
  }

  const handleSearch = () => {
    const t = search.split('/')
    console.log(t.length)
    if (t.length !== 2) setIsError(true)
    else
      navigate({
        pathname: '/search',
        search: createSearchParams({ repository: search }).toString()
      })
  }

  useEffect(() => {
    setIsError(false)
  }, [search])

  return (
    <FormControl variant={'outlined'} fullWidth>
      <InputLabel htmlFor={'printer-find'} error={isError}>
        Поиск
      </InputLabel>
      <OutlinedInput
        id={'employee-find'}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        label={'Поиск'}
        placeholder={
          'Введите имя репозитория в формате владелец/имя_репозитория и нажмите <Enter>'
        }
        error={isError}
        onKeyDown={handleKeys}
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
      {isError && (
        <FormHelperText error={true}>
          {'Введите правильное имя репозитория'}
        </FormHelperText>
      )}
    </FormControl>
  )
}
