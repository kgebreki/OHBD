import request from 'superagent';
import { handleSuccess, handleError } from '_utils/api';

export const postCheckUsername = username =>
  request.post('/api/users/checkusername')
    .send({ username })
    .then(handleSuccess)
    .catch(handleError);

export const getUsersList = () =>
  request.get('/api/users/')
    .then(handleSuccess)
    .catch(handleError);
