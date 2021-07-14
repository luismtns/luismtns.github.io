import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Col, Container, Row } from "react-grid-system";

import * as actions from "@data/posts/PostsActions";
import * as selectors from "@data/posts/PostsSelectors";

import "./index.scss";
import Postlist from "../../components/postlist/index";
import TypingAnimator from "../../components/typing-animator";
import Header from "../../components/header";
import Footer from "../../components/footer/index";
import ShurikenRow from "../../components/shuriken/Row";

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

    return (
      <div className="HomeContainer">
        <Header />
        <Container>
          <Row align="center">
            <Col xs={12} className="HomeContainer__TypingCol">
              <TypingAnimator>
                <h1>
                  Olá, muito prazer! Me chamo{" "}
                  <span className="primary">Luis</span> Sou um{" "}
                  <span className="primary italic">designer</span> que também{" "}
                  <span className="primary italic">desenvolve</span> !
                </h1>
                <h4>
                  Aqui disponiblizo trabalhos de design e desenvolvimento mais
                  superlativos.
                </h4>
                <br />
                <h4>
                  Se deseja iniciar um projeto,{" "}
                  <a href="mailto:luis.mtns@gmail.com" target="_blank">
                    conte-me mais sobre
                  </a>
                  !
                </h4>
              </TypingAnimator>
              <ShurikenRow items={20} rotate />
            </Col>
          </Row>
        </Container>
        <Postlist entries={entries} isLoading={isLoading} />
        <Footer />
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
