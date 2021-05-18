import React from "react";
import PropTypes from "prop-types";
import { Col, Container, Row } from "react-grid-system";
import Fade from "react-reveal/Fade";

import ConvertHtml from "@components/convert-html/index";
import Loader from "@components/loader/index";

import "./index.scss";
import Text from "../text";
import CarouselCustom from "../carousel";
import VideoAnimation from "../video-animation/index";
import ShurikenRow from "../shuriken/Row";

const Postlist = ({ entries, isLoading }) => (
  <Container className="Postlist">
    {isLoading && <Loader visible={isLoading} />}
    {entries &&
      entries.map((e, i) => {
        return (
          <div className="Postlist__item" key={i}>
            <Row>
              <Col xs={12} md={4} push={{ md: i % 2 !== 0 ? 8 : 0 }}>
                <Fade bottom cascade>
                  <ShurikenRow items={7} striped rotate />
                  <Text>
                    <ConvertHtml html={e.reblog.comment} />
                  </Text>
                </Fade>
              </Col>
              <Col xs={12} md={8} pull={{ md: i % 2 !== 0 ? 4 : 0 }}>
                {e.photos && (
                  <Fade cascade>
                    <CarouselCustom items={e.photos} />
                  </Fade>
                )}
                {e.video_url && (
                  <Fade cascade>
                    <VideoAnimation
                      poster={e.thumbnail_url}
                      src={e.video_url}
                    />
                  </Fade>
                )}
              </Col>
            </Row>
          </div>
        );
      })}
  </Container>
);

Postlist.propTypes = {};

Postlist.defaultProps = {};

export default Postlist;
