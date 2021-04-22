import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import * as actions from "@data/posts/PostsActions";
import * as selectors from "@data/posts/PostsSelectors";

import "./index.scss";
import ConvertHtml from "@components/convert-html";
import Loader from "@components/loader/index";
import LazyImage from "@components/lazy-image/index";
import Postlist from "@components/postlist/index";
import Logo from "@components/logo";
import TypingAnimator from "../../components/typing-animator";

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      entries: null,
    };
  }
  componentDidMount() {
    this.props.fetchEntries();
  }
  componentWillUnmount() {
    this.props.reset();
  }
  render() {
    const { entries, isLoading } = this.props;
    console.log(entries);
    return (
      <div className="HomeContainer">
        <Logo />
        <TypingAnimator>
          <h1>Olá! Seja bem-vindo, sou um designer e desenvolvedor web</h1>
          <h2>Aqui disponiblizo trabalhos mais superlativos.</h2>
          <br />
          <h4>
            Se deseja iniciar um projeto,{" "}
            <a href="mailto:luis.mtns@gmail.com" target="_blank">
              conte-me mais sobre
            </a>
            !
          </h4>
        </TypingAnimator>
        {/* <Postlist entries={entries} isLoading={isLoading} /> */}
      </div>
    );
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

HomeContainer.propTypes = {};

HomeContainer.defaultProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
