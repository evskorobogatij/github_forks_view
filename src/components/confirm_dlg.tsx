import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@mui/material'
import { ReactNode, useCallback, useState } from 'react'

interface ConfirmDlg {
  title: string
  message: ReactNode
  actionTitle: string
  acceptAction: () => void
  isDanger?: boolean
}

export const useConfirmDlg = ({
  title,
  message,
  actionTitle,
  acceptAction,
  isDanger = false
}: ConfirmDlg) => {
  const [isOpen, setIsOpen] = useState(false)
  const open = () => {
    console.log('try open...')
    setIsOpen(true)
  }
  const close = () => setIsOpen(false)

  const handleAccept = () => {
    close()
    acceptAction()
  }

  const DialogBox = useCallback(
    () => (
      <Dialog open={isOpen} onClose={close}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{message}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={close}>
            Отмена
          </Button>
          <Button variant="contained" onClick={handleAccept} color={!isDanger ? 'primary' : 'error'}>
            {actionTitle}
          </Button>
        </DialogActions>
      </Dialog>
    ),
    [isOpen, close, handleAccept, title, message]
  )

  return { open, DialogBox }
}
