import {
  START_LOGIN,
  LOGIN_SUCCESS
} from '../constants/actionTypes';

const login = () => dispatch => (
  new Promise((resolve) => {
    dispatch({ type: START_LOGIN });

    setTimeout(() => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: 'SOME_TOKEN'
      });

      return resolve();
    }, 2000);
  }));

export {
  login
};
