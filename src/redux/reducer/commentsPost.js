import { GET_COMMENTS, GET_COMMENTS_ERROR } from "../actions/apiComments";

const INITIAL_STATE = {
};

const commentsPost = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_COMMENTS:
      return {
        ...state,
        posts: action.data,
        result: true,
      };
    case GET_COMMENTS_ERROR:
      return {
        ...state,
        error: action.error,
        result: "error",
      };
    default:
      return state;
  }
};

export default commentsPost;
