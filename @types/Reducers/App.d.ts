type snackbarType = 'error' | 'info' | 'success' | 'warning';

interface ISnackbarData {
  show?: boolean,
  message?: string,
  type?: snackbarType,
}

interface IAppReducerType {
  title: string
  spinnerData: ISnackbarData
}
