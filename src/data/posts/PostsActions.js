import * as types from "./PostsTypes";
import TumblrService from "../../services/TumblrService";

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
    const res = await TumblrService.getPosts();
    dispatch(pushEntries(res.data.response.posts));
  } catch (ex) {
    dispatch(error(ex));
  }
};
