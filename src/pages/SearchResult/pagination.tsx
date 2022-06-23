import { useAppSelector } from '@app/hooks'
import { Pagination } from '@mui/material'
import { useMemo } from 'react'
import { useSearchParams, createSearchParams } from 'react-router-dom'

export const SearchPagination = () => {
  const [searchParams, setSearchParam] = useSearchParams()

  const handlePageChange = (page: number) => {
    const repository = searchParams.get('repository') || ''
    setSearchParam(createSearchParams({ repository, page: String(page) }))
  }

  const forks = useAppSelector((state) => state.repoInfo.info?.forks)
  const pageCount = useMemo(() => (forks ? Math.round(forks / 30) : 1), [forks])
  return (
    <>
      {pageCount > 1 && (
        <Pagination
          count={pageCount}
          page={Number(searchParams.get('page')) || 1}
          variant="outlined"
          shape="rounded"
          boundaryCount={3}
          siblingCount={2}
          onChange={(_, page) => handlePageChange(page)}
        />
      )}
    </>
  )
}
