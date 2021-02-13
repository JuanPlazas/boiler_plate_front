
import { combineReducers } from 'redux';

// Reducers
import app from '../Reducers/App/AppReducer';
import login from '../Reducers/Login/LoginReducer';


export default combineReducers<IRootState>({
  app,
  login,
});
