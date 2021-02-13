export enum AppActionTypes {
  SET_TITLE = 'app/SET_TITLE',
  SET_SPINNER_DATA = 'app/SET_SPINNER_DATA',
}

export const set_title = (title: string): IAction => ({
  type: AppActionTypes.SET_TITLE,
  value: title,
});

export const set_spinner_data = (value: ISnackbarData): IAction => ({
  type: AppActionTypes.SET_SPINNER_DATA,
  value,
});

export const getTitle = (): IThunkResult => {
  return async (dispatch, getState) => {
    const title = "CRUD TYPE SCRIPT";

    dispatch(set_title(title));
  }
} 