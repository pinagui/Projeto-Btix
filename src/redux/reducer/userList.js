import { GET_USERS, GET_USERS_ERROR } from "../actions/apiUsers";

const INITIAL_STATE = {
  users: '',
};

const userList = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_USERS:
    return {
      ...state,
      users: action.data,
      result: true,
    };
  case GET_USERS_ERROR:
    return {
      ...state,
      error: action.error,
      result: false,
    };
  default:
    return state;
  }
};

export default userList;