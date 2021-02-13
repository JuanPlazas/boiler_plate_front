import { batch } from 'react-redux';
import awaitToJs from 'await-to-js';
import { makeRequest } from '../../utils/client';
import { set_spinner_data } from '../App/AppActions'

export const create_user = (createUserData: IUser) => {
  return async (dispatch: any) => {
    console.log('8  >>>>>>');
    const query = `mutation createUser($input: CreateUserInput){
      createUser(input: $input){
        user,
        password,
      }
    }`;
    console.log('15  >>>>>>',);
    const variables: IObj = {
      input: {
        type: createUserData.type,
        name: createUserData.name,
        lastName: createUserData.lastName,
        email: createUserData.email,
        user: createUserData.user,
        password: createUserData.password,
      }
    }
    console.log('26  >>>>>>',);
    const [error] = await awaitToJs(makeRequest(query, variables));
    console.log('28 error >>>>>>', error);
    if (error) {
      console.log('29 error >>>>>>', error);
      console.log('31 error.message >>>>>>', error.message);
      console.log('32 error.name >>>>>>', error.name);
      dispatch(set_spinner_data({
        show: true,
        message: error.message,
        type: 'error',
      }));
      console.log('35  >>>>>>',);
      return error;
    }
  }
} 