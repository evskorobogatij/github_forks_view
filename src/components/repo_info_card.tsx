import { useAppSelector } from '@app/hooks'
import { Card, CardContent, CardHeader, Grid, Typography } from '@mui/material'
import { ParamItem } from './param_item'

export const RepoInfoCard = () => {
  const { info, loading } = useAppSelector((state) => state.repoInfo)
  return (
    <>
      <Card>
        <CardHeader title={'Сведения о репозитории'} />
        <CardContent>
          <Grid container direction={'row'} spacing={4}>
            <Grid item xs={6}>
              <ParamItem
                title="Наименование"
                value={!loading ? info?.name : undefined}
              />
            </Grid>
            <Grid item xs={6}>
              <ParamItem
                title="Владелец"
                value={!loading ? info?.owner.login : undefined}
              />
            </Grid>
            <Grid item xs={12}>
              <ParamItem
                title="Описание"
                value={!loading ? info?.description : undefined}
              />
            </Grid>
            <Grid item xs={4}>
              <ParamItem
                title="Форков"
                value={!loading ? info?.forks : undefined}
              />
            </Grid>
            <Grid item xs={4}>
              <ParamItem
                title="Звезд"
                value={!loading ? info?.stargazers_count : undefined}
              />
            </Grid>
            {!loading && (
              <Grid item xs={4}>
                {info?.fork ? (
                  <Typography
                    variant="body1"
                    component={'div'}
                    sx={{
                      color: (theme) => theme.palette.error.dark,
                      fontWeight: (theme) => theme.typography.fontWeightBold
                    }}
                  >
                    Форк
                  </Typography>
                ) : (
                  <Typography
                    variant="body1"
                    component={'div'}
                    sx={{
                      color: (theme) => theme.palette.success.main,
                      fontWeight: (theme) => theme.typography.fontWeightBold
                    }}
                  >
                    Оригинал
                  </Typography>
                )}
              </Grid>
            )}
          </Grid>
        </CardContent>
      </Card>
    </>
  )
}
