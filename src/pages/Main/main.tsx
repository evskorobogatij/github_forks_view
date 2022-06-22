import {
  Container} from '@mui/material'
import { styled } from '@mui/system'
import { SearchLine } from '@components/search_line'

const MainContainer = styled(Container)(() => ({
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}))

export const Main = () => {

  return (
    <MainContainer>
      <SearchLine />
    </MainContainer>
  )
}
