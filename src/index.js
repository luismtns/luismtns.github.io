import "regenerator-runtime/runtime.js";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { store } from "@config/Redux";
import routes from "@config/routes";

import "@config/stylesheets/application.scss";

import {
  changeScrollTop,
  changeWindowSize,
} from "@app/data/layout/LayoutActions";

require.context("./../public/");

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(
  <Provider store={store}>{routes()}</Provider>,
  document.getElementById("yield")
);

window.addEventListener("scroll", (e) => {
  store.dispatch(changeScrollTop(window.scrollY));
});

window.addEventListener("resize", (e) => {
  store.dispatch(changeWindowSize(window.innerWidth, window.innerHeight));
});
