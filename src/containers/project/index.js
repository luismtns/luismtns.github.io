import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import * as actions from "@data/posts/PostsActions";
import * as selectors from "@data/posts/PostsSelectors";

import "./index.scss";
import Loader from "../../components/loader";
import Project from "@components/project/index";

class ProjectContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entry: null,
      redirect: false,
    };
  }
  componentDidMount() {
    this.props.fetchEntries().then(() => {
      var project = this.props.entries.find((e) => e.slug == this.props.slug);
      this.setState({
        entry: project,
        redirect: !project,
      });
    });
  }
  componentWillUnmount() {
    this.props.reset();
  }

  render() {
    const { entries, isLoading, slug } = this.props;
    const { entry, redirect } = this.state;
    if (redirect) {
      return <Redirect to="/error/404" />;
    }
    return entry && <Project entry={entry} />;
  }
}

const mapStateToProps = (state, ownProps) => ({
  isLoading: selectors.isLoading(state),
  entries: selectors.entries(state),
});

const mapDispatchToProps = (dispatch) => ({
  reset: () => dispatch(actions.reset()),
  fetchEntries: () => dispatch(actions.fetchEntries()),
});

ProjectContainer.propTypes = {};

ProjectContainer.defaultProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectContainer);
