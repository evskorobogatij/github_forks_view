import { RepoInfoCard } from '@components/repo_info_card'
import { SearchGrid } from '@components/searchgrid'
import { AppToolbar } from '@components/toolbar'
import { CssBaseline, Stack, Toolbar } from '@mui/material'
import { styled } from '@mui/system'

const MainContainer = styled('main')(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  gap: 2
}))

export const SearchResult = (): JSX.Element => {
  return (
    <>
      <Stack>
        <AppToolbar />
        <MainContainer>
          <Toolbar />   
          <RepoInfoCard />       
          <SearchGrid />
        </MainContainer>
      </Stack>
    </>
  )
}
