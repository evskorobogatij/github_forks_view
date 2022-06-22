import { Typography } from '@mui/material'
import { GridRenderCellParams } from '@mui/x-data-grid'
import { useNavigate, createSearchParams } from 'react-router-dom'

export const RenderRepoName = (props: GridRenderCellParams<string>) => {
  const { value } = props
  const navigate = useNavigate()
  const handleClick = () => {
    if (value)
      navigate({
        pathname: '/search',
        search: createSearchParams({ repository: value }).toString()
      })
  }
  return (
    <Typography
      component={'div'}
      sx={{
        fontWeight: (theme) => theme.typography.fontWeightMedium,
        color: (theme) => theme.palette.primary.main,
        cursor: 'pointer'
      }}
      onClick={handleClick}
    >
      {value}
    </Typography>
  )
}
