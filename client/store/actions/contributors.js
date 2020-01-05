export const GET_USERS = 'GET_USERS';

export function listUsers(contributors) {
  return {
    type: GET_USERS,
    contributors,
  };
}
