import * as types from './LayoutTypes';

const initialState = {
  scrollTop: 0,
  windowSize: {
    width: window.innerWidth,
    height: window.innerHeight,
  },
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.LAYOUT_CHANGE_SCROLL_TOP:
      return {
        ...state,
        scrollTop: action.scrollTop,
      };
    case types.LAYOUT_CHANGE_WiNDOW_SIZE:
      return {
        ...state,
        windowSize: {
          width: action.width,
          height: action.height,
        }
      };
    default:
      return state;
  }
}
