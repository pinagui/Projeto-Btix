import { GET_POSTS, GET_POSTS_ERROR } from "../actions/apiPost";

const INITIAL_STATE = {
  posts: "",
  result: false,
};

const postList = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.data,
        result: true,
      };
    case GET_POSTS_ERROR:
      return {
        ...state,
        error: action.error,
        result: 'error',
      };
    default:
      return state;
  }
};

export default postList;
