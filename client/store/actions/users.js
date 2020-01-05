export const GET_USERS = 'GET_USERS';

export function listUsers(users) {
  return {
    type: GET_USERS,
    users,
  };
}
