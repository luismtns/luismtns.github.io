import * as types from "./PostsTypes";

const initialState = {
  isLoading: false,
  entries: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.POSTS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case types.POSTS_ALL:
      return {
        ...state,
        isLoading: false,
        entries: [...state.entries, ...action.entries],
      };
    case types.POSTS_ERROR:
      return {
        ...state,
        isLoading: false,
      };
    case types.POSTS_RESET:
      return {
        ...state,
        ...initialState,
      };
    default:
      return state;
  }
}
