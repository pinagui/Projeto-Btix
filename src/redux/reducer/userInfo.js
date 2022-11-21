import {
  GET_USERS_INFO,
  GET_USERS_INFO_ERROR,
  VERIFY_USER,
} from "../actions/apiUserInfo";

const INITIAL_STATE = {
}

const userList = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_USERS_INFO:
      return {
        ...state,
        users: action.data,
        result: true,
      };
    case GET_USERS_INFO_ERROR:
      return {
        ...state,
        error: action.error,
        result: false,
      };
    case VERIFY_USER:
      return {
        ...state,
        result: false,
      };
    default:
      return state;
  }
};

export default userList;
