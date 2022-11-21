export const GET_POSTS = 'GET_POSTS';
export const GET_POSTS_ERROR = 'GET_POSTS_ERROR';

export const getPosts = (data) => ({
  type: GET_POSTS,
  data,
})

export const searchPostError = (error) => ({
  type: GET_POSTS_ERROR,
  error,
})

export function fetchPosts() {
  return async (dispatch) => {
    try {
      const END_POINT = 'https://jsonplaceholder.typicode.com/posts';
      const response = await fetch(END_POINT);
      const data = await response.json();
      dispatch(getPosts(data));
    } catch (error) {
      dispatch(searchPostError(error))
    }
  }
}

