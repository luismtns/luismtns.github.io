const posts = (state) => state.posts;

export const isLoading = (state) => posts(state).isLoading;
export const entries = (state) => posts(state).entries;
