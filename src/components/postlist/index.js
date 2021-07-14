import React from "react";
import PropTypes from "prop-types";
import { Col, Container, Row } from "react-grid-system";
import Fade from "react-reveal/Fade";
import Reveal from "react-reveal/Reveal";

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
              <Col xs={12} md={5} push={{ md: i % 2 !== 0 ? 7 : 0 }}>
                <Reveal effect={"blurIn"}>
                  <ShurikenRow items={7} striped rotate />
                  <Text>
                    <ConvertHtml html={e.reblog.comment} />
                  </Text>
                </Reveal>
              </Col>
              <Col xs={12} md={7} pull={{ md: i % 2 !== 0 ? 5 : 0 }}>
                {e.photos && (
                  <Reveal effect={"blurIn"}>
                    <CarouselCustom items={e.photos} />
                  </Reveal>
                )}
                {e.video_url && (
                  <Reveal effect={"blurIn"}>
                    <VideoAnimation
                      poster={e.thumbnail_url}
                      src={e.video_url}
                    />
                  </Reveal>
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
