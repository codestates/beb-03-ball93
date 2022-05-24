import { setAlert, removeAlert } from 'slices/alertSlice'

enum severity {
  error = 'error',
  success = 'success',
  warning = 'warning',
}

export const createAlert =
  (message: string, alertType = severity.error, timeout: number = 5000) =>
  (dispatch: any) => {
    const id = self.crypto.randomUUID()

    dispatch(setAlert({ message, id, alertType }))

    setTimeout(() => dispatch(removeAlert(id)), timeout)
  }

export const closeAlert = (id: string) => (dispatch: any) => {
  dispatch(removeAlert(id))
}
