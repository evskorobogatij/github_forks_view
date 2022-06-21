import { SearchGrid } from '@components/searchgrid'
import { AppToolbar } from '@components/toolbar'
import { CssBaseline, Stack, Toolbar } from '@mui/material'
import { styled } from '@mui/system'

const MainContainer = styled('main')(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3)
}))

export const SearchResult = (): JSX.Element => {
  return (
    <>
      {/* <div style={{ display: 'flex', minHeight: '100vh' }}>
        <AppToolbar />
        <MainContainer>
          <Toolbar />
          <SearchGrid />
        </MainContainer>
      </div> */}
      <Stack>
        <AppToolbar />
        <MainContainer>
          <Toolbar />
          <SearchGrid />
        </MainContainer>
      </Stack>
    </>
  )
}
