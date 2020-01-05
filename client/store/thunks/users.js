import { getUsersList } from '_api/users';
import { listUsers } from '_actions/users';

import { dispatchError } from '_utils/api';


export const attemptGetUsers = () => dispatch =>
  getUsersList()
    .then(data => {
      dispatch(listUsers);
      return data;
    })
    .catch(dispatchError(dispatch));
