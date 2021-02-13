import { batch } from 'react-redux';
import awaitToJs from 'await-to-js';
import { makeRequest } from '../../utils/client';

export enum LoginActionTypes {
  SET_LOGIN_INFO = 'login/SET_LOGIN_INFO',
}

export const set_login_info = (token: ILoginReducerType): IAction => ({
  type: LoginActionTypes.SET_LOGIN_INFO,
  value: token,
});

export const initLogin = (user: string, password: string) => {
  return async (dispatch: any) => {

    const query = `query login($input: LoginInput) {
      login( input: $input) {
        user,
        token,
      }
    }
    `;

    const variables: IObj = {
      input: {
        user,
        password,
      }
    }

    const [error, response] = await awaitToJs(makeRequest(query, variables));
    if (error) {
      return error;
    }

    const token = response.login.token;
    const loginInfo = {
      user,
      password,
      token,
    };
    return batch(() => {
      dispatch(set_login_info(loginInfo));
    });
  }
} 