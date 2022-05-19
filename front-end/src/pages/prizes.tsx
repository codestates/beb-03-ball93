import { Box, Typography } from '@mui/material'

import WinningsTable from 'components/WinningsTable'

const GameRule = () => {
  return (
    <Box marginTop={'2rem'}>
      {' '}
      <Typography component={'h2'} variant={'h4'}>
        Prize Table
      </Typography>
      {<WinningsTable />}
    </Box>
  )
}

export default GameRule
