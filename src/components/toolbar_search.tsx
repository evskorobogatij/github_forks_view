import { InputBase } from '@mui/material'
import { styled, alpha } from '@mui/material/styles'
import SearchIcon from '@mui/icons-material/Search'
import { KeyboardEvent, useMemo, useState } from 'react'
import {
  useSearchParams,
  useNavigate,
  createSearchParams
} from 'react-router-dom'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto'
  }
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '80ch'
    }
  }
}))

export const ToolbarSearch = () => {
  const [search, setSearch] = useState('')
  const [isError, setIsError] = useState(false)
  const [searchParams] = useSearchParams()

  const navigate = useNavigate()

  const repoName = useMemo(() => searchParams.get('repository'), [searchParams])

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

  const handleKeys = (
    e: KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    if (e.key === 'Enter') handleSearch()
  }

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Введите имя репозитория в формате владелец/имя_репозитория и нажмите <Enter>"
        inputProps={{ 'aria-label': 'search' }}
        defaultValue={repoName}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeys}
        error={isError}
      />
    </Search>
  )
}
