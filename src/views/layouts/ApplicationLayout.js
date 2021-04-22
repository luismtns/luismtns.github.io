import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

import NotificationContainer from "@containers/notification";

export default class ApplicationLayout extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <React.Fragment>
        {children}

        <NotificationContainer />
      </React.Fragment>
    );
  }
}

ApplicationLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
