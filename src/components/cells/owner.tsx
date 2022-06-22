import { OwnerInfo } from '@interfaces/repo_info'
import { Avatar } from '@mui/material'
import { GridRenderCellParams } from '@mui/x-data-grid'

export const RenderOwner = (props: GridRenderCellParams<OwnerInfo>) => {
  const { value } = props
  return (
    <>
      <Avatar
        src={value?.avatar_url}
        alt={value?.login}
        sx={{ marginRight: '1rem' }}
      />
      <strong>{value?.login}</strong>
    </>
  )
}
