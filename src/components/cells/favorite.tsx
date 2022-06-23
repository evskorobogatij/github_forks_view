import { useAppDispatch, useAppSelector } from '@app/hooks'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { IconButton } from '@mui/material'

import { GridRenderCellParams } from '@mui/x-data-grid'
import {
  addToFavorite,
  removeFromFavorite
} from '@store/favorites/favoritesSlice'
import { useMemo } from 'react'
import { useConfirmDlg } from '@components/confirm_dlg'
export const RenderFavorite = (props: GridRenderCellParams<unknown>) => {
  const { id, row } = props
  const favorites = useAppSelector((state) => state.favorites)
  const dispatch = useAppDispatch()

  const { open: openAddDlg, DialogBox: AddToFavoriteDlg } = useConfirmDlg({
    title: 'Добавление в избранное',
    message: (
      <>
        Вы действительно хотите добавить репозиторий{' '}
        <strong>{row.full_name}</strong> в избранное?
      </>
    ),
    actionTitle: 'Добавить',
    acceptAction: () => {
      dispatch(addToFavorite(Number(id)))
    }
  })

  const { open: openRemoveDlg, DialogBox: RemoveFromFavoriteDlg } =
    useConfirmDlg({
      title: 'Удаление из избранного',
      message: (
        <>
          Вы действительно хитите удалить репозиторий{' '}
          <strong>{row.full_name}</strong> из избранного?
        </>
      ),
      actionTitle: 'Удалить',
      acceptAction: () => {
        dispatch(removeFromFavorite(Number(id)))
      },
      isDanger: true
    })

  const isFavorite = useMemo(
    () => favorites.includes(Number(id)),
    [id, favorites]
  )

  const handleClick = () => {
    if (isFavorite) openRemoveDlg()
    else openAddDlg()
  }

  return (
    <>
      <AddToFavoriteDlg />
      <RemoveFromFavoriteDlg />
      <IconButton onClick={handleClick}>
        {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </IconButton>
    </>
  )
}
