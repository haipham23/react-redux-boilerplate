import initState from './initState';
import { START_LOGIN, LOGIN_SUCCESS } from '../constants/actionTypes';

export default function authReducer(state = initState.auth, action) {
  switch (action.type) {
    case START_LOGIN:
      return {
        isLoading: true,
        isAuth: false,
        token: ''
      };

    case LOGIN_SUCCESS:
      return {
        isLoading: false,
        isAuth: true,
        token: action.payload
      };

    default:
      return state;
  }
}
