import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import cn from "classnames";

import "./index.scss";
import Loader from "../loader";

const Layout = ({ children }) => {
  const posts = useSelector((state) => state.posts);
  return (
    <div
      className={cn("Layout", {
        "Layout--loaded": posts.isLoading || posts.entries.length > 0,
      })}
    >
      {children}
    </div>
  );
};

Layout.propTypes = {};

Layout.defaultProps = {};

export default Layout;
