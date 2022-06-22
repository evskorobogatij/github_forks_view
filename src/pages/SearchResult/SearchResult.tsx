import { RepoInfoCard } from '@components/repo_info_card'
import { SearchGrid } from '@components/searchgrid'
import { AppToolbar } from '@components/toolbar'
import { Stack, Toolbar } from '@mui/material'
import { styled } from '@mui/system'
import { loadRepoInfoFx } from '@store/repoInfo/repoInfoSlice'
import { useAppDispatch, useAppSelector } from '@app/hooks'
import { useEffect, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { NotFound } from '@components/not_found'

const MainContainer = styled('main')(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  display: 'flex',
  flexDirection: 'column'
}))

export const SearchResult = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const [searchParams] = useSearchParams()
  const { error } = useAppSelector((state) => state.repoInfo)

  const repoName = useMemo(() => searchParams.get('repository'), [searchParams])

  useEffect(() => {
    console.log('Search params ===', searchParams.get('repository'))
  }, [searchParams])

  useEffect(() => {
    if (repoName) {
      dispatch(loadRepoInfoFx(repoName))
    }
  }, [dispatch, repoName])

  return (
    <>
      <Stack sx={{height: '100vh'}}>
        <AppToolbar />
        <MainContainer>
          <Toolbar />
          {!error ? (
            <>
              <RepoInfoCard />
              <SearchGrid />
            </>
          ) : (
            <NotFound />
          )}
        </MainContainer>
      </Stack>
    </>
  )
}
