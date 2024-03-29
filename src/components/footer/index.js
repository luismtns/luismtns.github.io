import React from "react";
import PropTypes from "prop-types";
import { Col, Container, Row } from "react-grid-system";

import "./index.scss";
import Logo from "../logo";
import SocialIcon from "../social-icon/index";
import Text from "../text";
import Shuriken from "../shuriken";
import ShurikenRow from "../shuriken/Row";
import SocialIconLinks from "../social-icon/Links";
const Footer = () => (
  <div className="Footer">
    <Container>
      <ShurikenRow items={20} striped rotate={true} />
      <Row align="center">
        <Col md={3}>
          <Logo />
        </Col>
        <Col md={6}>
          <Text className="Footer__content">
            <h6>
              <i>Identidade visual por </i>
              <a href={"https://taplink.cc/s0ulrest"}>
                <strong>Gabriel Fornazaro</strong>
              </a>
            </h6>
            <br />
            <h6>
              <i>Desenvolvimento e UI por </i>
              <a href={"https://luisbovo.com.br"}>
                <strong>Luís Bovo</strong>
              </a>
            </h6>
          </Text>
        </Col>
        <Col md={3}>
          <SocialIconLinks />
        </Col>
      </Row>
      <ShurikenRow items={20} rotate />
      <Row>
        <Col xs={12}>
          <Text className="Footer__disclaimer">
            <p>
              Todo o conteúdo é protegido por seus respectivos direitos autorais
              e outras leis de proteção.
            </p>
            <br />
            <p>© Todos os direitos reservados.</p>
          </Text>
        </Col>
      </Row>
    </Container>
  </div>
);

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
