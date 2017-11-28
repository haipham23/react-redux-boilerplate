import axios from 'axios';

import {
  START_LOGIN,
  LOGIN_SUCCESS
} from '../constants/actionTypes';

const login = () => (dispatch) => {
  dispatch({ type: START_LOGIN });

  return axios
    .post('https://jsonplaceholder.typicode.com/posts', {})
    .then(() => dispatch({
      type: LOGIN_SUCCESS,
      payload: 'SOME_TOKEN'
    }));
};

export {
  login
};
