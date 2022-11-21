export const GET_USERS = 'GET_USERS';
export const GET_USERS_ERROR = 'GET_USERS_ERROR';

export const getUsers = (data) => ({
  type: GET_USERS,
  data,
})

export const getUsersError = (error) => ({
  type: GET_USERS_ERROR,
  error,
})

export function fetchUsers() {
  return async (dispatch) => {
    try {
      const END_POINT = 'https://jsonplaceholder.typicode.com/users';
      const response = await fetch(END_POINT);
      const data = await response.json();
      dispatch(getUsers(data));
    } catch (error) {
      dispatch(getUsersError(error))
    }
  }
}