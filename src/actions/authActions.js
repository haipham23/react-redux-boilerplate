import axios from 'axios';

import config from '../config/index';

import {
  START_LOGIN,
  LOGIN_SUCCESS
} from '../constants/actionTypes';

const login = () => (dispatch) => {
  dispatch({ type: START_LOGIN });

  return axios
    .post(config.authUrl, {})
    .then(() => dispatch({
      type: LOGIN_SUCCESS,
      payload: 'SOME_TOKEN'
    }));
};

export {
  login
};
