import { Card, CardContent, CardHeader, Grid } from '@mui/material'
import { ParamItem } from './param_item'

export const RepoInfoCard = () => {
  return (
    <>
      <Card sx={{ marginBottom: (theme) => theme.spacing(3) }}>
        <CardHeader title={'Сведения о репозитории'} />
        <CardContent>
          <Grid container direction={'row'} spacing={4}>
            <Grid item xs={6}>
              <ParamItem title="Наименование" value={undefined} />
            </Grid>
            <Grid item xs={6}>
              <ParamItem title="Владелец" value={undefined} />
            </Grid>
            <Grid item xs={12}>
              <ParamItem title="Описание" value={undefined} />
            </Grid>
            <Grid item xs={4}>
              <ParamItem title="Форков" value={undefined} />
            </Grid>
            <Grid item xs={4}>
              <ParamItem title="Звезд" value={undefined} />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  )
}
