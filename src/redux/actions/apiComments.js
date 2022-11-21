export const GET_COMMENTS = 'GET_COMMENTS';
export const GET_COMMENTS_ERROR = 'GET_COMMETNS_ERROR';

export const getPosts = (data) => ({
  type: GET_COMMENTS,
  data,
})

export const searchPostError = (error) => ({
  type: GET_COMMENTS_ERROR,
  error,
})

export function fetchComments(id) {
  return async (dispatch) => {
    try {
      const END_POINT = `https://jsonplaceholder.typicode.com/posts/${id}/comments`;
      const response = await fetch(END_POINT);
      const data = await response.json();
      dispatch(getPosts(data));
    } catch (error) {
      dispatch(searchPostError(error))
    }
  }
}

