const layout = state => state.layout;

export const scrollTop = state => layout(state).scrollTop;

export const windowSize = state => layout(state).windowSize;

export const windowHeight = state => windowSize(state).height;

export const windowWidth = state => windowSize(state).width;

export const isMobile = state => windowWidth(state) < 1024;
