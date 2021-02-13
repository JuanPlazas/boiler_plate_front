import { Reducer } from 'redux';
import { AppActionTypes } from './AppActions';

export const initialState: IAppReducerType = {
  title: '',
  spinnerData: {
    show: false,
    message: '',
    type: 'success',
  },
};


const reducer: Reducer<IAppReducerType, IAction> = (state = initialState, action: IAction): IAppReducerType => {
  switch (action.type) {
    case AppActionTypes.SET_TITLE:
      return {
        ...state,
        title: action.value,
      };
    case AppActionTypes.SET_SPINNER_DATA:
      return {
        ...state,
        spinnerData: action.value,
      };
    default:
      return state;
  }
};

export default reducer;