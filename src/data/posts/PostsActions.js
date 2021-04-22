import * as types from "./PostsTypes";
import PostsService from "./../../services/PostsService";

const isLoading = () => ({
  type: types.POSTS_LOADING,
});

const pushEntries = (entries) => ({
  type: types.POSTS_ALL,
  entries,
});

const error = (payload) => ({
  type: types.POSTS_ERROR,
  payload,
});

export const reset = () => ({
  type: types.POSTS_RESET,
});

export const fetchEntries = () => async (dispatch) => {
  dispatch(isLoading());

  try {
    const response = await PostsService.getPosts();
    dispatch(pushEntries(response.data));
  } catch (ex) {
    dispatch(error(ex));
  }
};
