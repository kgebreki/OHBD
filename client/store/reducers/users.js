import update from 'immutability-helper';
import { GET_USERS } from '../actions/users';

export default function user(state = {}, action) {
  switch (action.type) {
    case GET_USERS:
      return update(state, action.users);
    default:
      return state;
  }
}
