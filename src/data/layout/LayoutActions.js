import * as types from './LayoutTypes';

export const changeScrollTop = scrollTop => ({
  type: types.LAYOUT_CHANGE_SCROLL_TOP,
  scrollTop,
});

export const changeWindowSize = (width, height) => ({
  type: types.LAYOUT_CHANGE_WiNDOW_SIZE,
  width,
  height,
});

export const scrollTo = ref => dispatch => {
  const to = isNaN(ref) ? document.getElementById(ref).offsetTop : ref;
  const element = document.body;
  const duration = 1000;

  var start = window.scrollY,
  change = to - start,
  currentTime = 0,
  increment = 20;

  var animateScroll = function(){
    currentTime += increment;
    var val = Math.easeInOutQuad(currentTime, start, change, duration);
    window.scrollTo(0, val);
    if(currentTime < duration) {
      setTimeout(animateScroll, increment);
    }
  };
  animateScroll();
}

Math.easeInOutQuad = function (t, b, c, d) {
  t /= d/2;
	if (t < 1) return c/2*t*t + b;
	t--;
	return -c/2 * (t*(t-2) - 1) + b;
};
