import {FC} from 'react'
import MainContent from './main_content'
import {MainSidebar} from './main_sidebar'
import ContainerWithSplash from 'components/molecules/container_with_splash'
import {Box, SxProps} from '@mui/material'

export const MainAppPage: FC = () => {
  const mainAppPageStyle: SxProps = {
    display: 'flex',
  }

  return (
    <ContainerWithSplash>
      <Box sx={mainAppPageStyle}>
        <MainSidebar />
        <MainContent />
      </Box>
    </ContainerWithSplash>
  )
}

export default MainAppPage
