import { DataGrid, GridColDef } from '@mui/x-data-grid'

export const SearchGrid = (): JSX.Element => {
  const columns: GridColDef[] = [
    { field: 'full_name', headerName: 'Наименование репозитория', width: 340 },
    { field: 'owner', headerName: 'Владелец', width: 400 },
    { field: 'stargazers_count', headerName: 'Кол-во звезд', width: 210 },
    { field: 'isFavorite', headerName: 'Избранное', width: 140 }
  ]

  return (
    <>
      <div style={{ width: '100%', height: 560 }}>
        <DataGrid
          rows={[]}
          columns={columns}
          disableColumnMenu={true}
          density={'standard'}
          hideFooterSelectedRowCount={true}
          pagination={undefined}
          hideFooterPagination={true}
          hideFooter={true}
        />
      </div>
    </>
  )
}
