import { getUsersList } from '_api/users';
import { listUsers } from '_actions/contributors';

import { dispatchError } from '_utils/api';


export const attemptGetContributors = () => dispatch =>
  getUsersList()
    .then(data => {
      dispatch(listUsers(data));
      return data;
    })
    .catch(dispatchError(dispatch));
