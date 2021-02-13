// Libraries
import { ThunkDispatch } from 'redux-thunk';
import { AppActionTypes } from '../../src/Reducers/App/AppActions';
import { LoginActionTypes } from '../../src/Reducers/Login/LoginActions';

declare global {
  interface IAction {
    type: AppActionTypes | LoginActionTypes;
    value?: any;
    payload?: any;
  }

  interface IRootState {
    app: IAppReducerType;
    login: ILoginReducerType;
  }
  /**
   * Manual Thunk Result to limit properties inside dispatch params,
   * because in automatic 'ThunkAction' in redux you can send any key in dispatch object
   */
  type IThunkResult<R = void> = (
    dispatch: IThunkDispatch,
    getState: () => IRootState,
    extraArgument: any,
  ) => R;

  type IThunkDispatch = (obj: IAction | IThunkResult) => void;

  /**
   * Automatic thunk result,
   * replace for the manual 'IThunkResult' if you send any key inside dispatch object
   */
  // type ThunkResult<R> = ThunkAction<R, IRootState, undefined, IAction>;

  type ThunkDispatchType = ThunkDispatch<IRootState, void, IAction>;
}
