import { Reducer } from 'redux';
import { LoginActionTypes } from './LoginActions';

export const initialState: ILoginReducerType = {
  user: '',
  password: '',
  token: '',
};


const reducer: Reducer<ILoginReducerType, IAction> = (state = initialState, action) => {
  switch (action.type) {
    case LoginActionTypes.SET_LOGIN_INFO:
      return {
        ...state,
        user: action.value.user,
        password: action.value.password,
        token: action.value.token,
      };
    default:
      return state;
  }
};

export default reducer;