import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Col, Container, Row } from "react-grid-system";
import Reveal from "react-reveal/Reveal";

import * as actions from "@data/posts/PostsActions";
import * as selectors from "@data/posts/PostsSelectors";

import "./index.scss";
import Postlist from "../../components/postlist/index";
import TypingAnimator from "../../components/typing-animator";
import Header from "../../components/header";
import ShurikenRow from "../../components/shuriken/Row";
import SocialIconLinks from "../../components/social-icon/Links";
import Text from "../../components/text/index";

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
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
                <h2>
                  Olá, muito prazer! <br />
                  Sou um <span className="primary italic">designer</span> e{" "}
                  <span className="primary italic">desenvolvedor</span> situado
                  em São Paulo - Brasil.
                </h2>
                <h5>
                  Abaixo você pode conferir meus trabalhos mais superlativos.
                </h5>
                <br />
              </TypingAnimator>
              <Row align="center">
                <Col xs={12} md={7} lg={8}>
                  <Text>
                    <h4>
                      <a href="mailto:luis.mtns@gmail.com" target="_blank">
                        Solicite um orçamento
                      </a>
                    </h4>
                  </Text>
                </Col>
                <Col xs={12} md={5} lg={4}>
                  <SocialIconLinks />
                </Col>
              </Row>
              <ShurikenRow items={20} rotate />
            </Col>
          </Row>
        </Container>
        <Postlist entries={entries} isLoading={isLoading} />
        <Reveal effect={"blurIn"}>
          <Row>
            <Col xs={12} md={10} offset={{ md: 1 }}>
              <Text align="center">
                <h3>
                  Ficou interessado em iniciar um projeto?
                  <br /> Conte-me o que precise,{" "}
                  <a href="mailto:luis.mtns@gmail.com" target="_blank">
                    solicite um orçamento agora
                  </a>
                  .
                </h3>
              </Text>
            </Col>
          </Row>
        </Reveal>
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
