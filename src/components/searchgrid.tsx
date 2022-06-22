import { useAppDispatch, useAppSelector } from '@app/hooks'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { loadRepoForksFx } from '@store/repoForks/repoForksSlice'
import { useEffect } from 'react'
import { RenderOwner } from './cells/owner'
import { RenderRepoName } from './cells/repo_name'


export const SearchGrid = (): JSX.Element => {
  const forks_url = useAppSelector((state) => state.repoInfo.info?.forks_url)
  const { loading, forks } = useAppSelector((state) => state.repoForks)

  const dispatch = useAppDispatch()

  const columns: GridColDef[] = [
    {
      field: 'full_name',
      headerName: 'Наименование репозитория',
      width: 340,
      renderCell: RenderRepoName
    },
    {
      field: 'owner',
      headerName: 'Владелец',
      width: 400,
      renderCell: RenderOwner
    },
    {
      field: 'stargazers_count',
      headerName: 'Кол-во звезд',
      width: 210,
      type: 'number'
    },
    { field: 'isFavorite', headerName: 'Избранное', width: 140 }
  ]

  useEffect(() => {
    if (forks_url) dispatch(loadRepoForksFx(forks_url))
  }, [dispatch, forks_url])

  return (
    <>
      <div style={{ width: '100%', flexGrow: 1 }}>
        <DataGrid
          rows={forks}
          columns={columns}
          disableColumnMenu={true}
          density={'standard'}
          hideFooterSelectedRowCount={true}
          pagination={undefined}
          hideFooterPagination={true}
          hideFooter={true}
          loading={loading}
        />
      </div>
    </>
  )
}
