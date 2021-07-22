import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

import NotificationContainer from "@containers/notification";
import BackgroundVideo from "../../components/background-video";
import Layout from "../../components/layout";
import Footer from "../../components/footer";
import NoiseBackground from "../../components/noise-background";

export default class ApplicationLayout extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <React.Fragment>
        <Layout>{children}</Layout>
        <Footer />

        <NoiseBackground animate />
        <BackgroundVideo />
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
