export const GET_USERS_INFO = 'GET_USERS_INFO';
export const GET_USERS_INFO_ERROR = 'GET_USERS_INFO_ERROR';
export const VERIFY_USER = 'VERIFY_USER';

export const verifyUser = () => ({
  type: VERIFY_USER,
})

export const getUserInfo = (data) => ({
  type: GET_USERS_INFO,
  data,
})

export const getUserInfoError = (error) => ({
  type: GET_USERS_INFO_ERROR,
  error,
})

export function fetchUserInfo(id) {
  return async (dispatch) => {
    try {
      dispatch(verifyUser())
      const END_POINT = `https://jsonplaceholder.typicode.com/users/${id}`;
      const response = await fetch(END_POINT);
      const data = await response.json();
      dispatch(getUserInfo(data));
    } catch (error) {
      dispatch(getUserInfoError(error))
    }
  }
}