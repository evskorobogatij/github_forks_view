//    item :  {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'flex-start',
// }

import { Box, Skeleton, Typography } from '@mui/material'

interface ParamItemProps {
  title: string
  value: string | number | undefined
}

export const ParamItem = ({ title, value }: ParamItemProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: 2,
        padding: 0
      }}
    >
      <Typography
        variant="body1"
        component={'div'}
        sx={{ color: (theme) => theme.palette.text.secondary }}
      >
        {title}
      </Typography>
      {value !== undefined ? (
        <Typography
          variant="body1"
          component={'div'}
          sx={{
            flexGrow: 1,
            color: (theme) => theme.palette.primary.dark,
            fontWeight: (theme) => theme.typography.fontWeightBold
          }}
        >
          {value}
        </Typography>
      ) : (
        <Skeleton animation={'wave'} sx={{ flexGrow: 1 }} />
      )}
    </Box>
  )
}
