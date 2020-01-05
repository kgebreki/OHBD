import update from 'immutability-helper';
import { GET_USERS } from '../actions/contributors';

export default function contributors(state = {}, action) {
  switch (action.type) {
    case GET_USERS:
      return update(state, { $set: action.contributors });
    default:
      return state;
  }
}
