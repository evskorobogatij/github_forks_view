import { Link } from '@mui/material'
import { GridRenderCellParams } from '@mui/x-data-grid'
import { useNavigate, createSearchParams } from 'react-router-dom'
export const RenderLink = (props: GridRenderCellParams<string>) => {
  const { value } = props
  return (
    <>
      <Link
        href={value}
        target={'_blank'}
        rel={'noreferrer'}
        underline={'hover'}
      >
        {value}
      </Link>
    </>
  )
}
