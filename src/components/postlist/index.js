import React from "react";
import PropTypes from "prop-types";
import { Col, Container, Row } from "react-grid-system";
import Reveal from "react-reveal/Reveal";
import { FaEye } from "react-icons/fa";

import ConvertHtml from "@components/convert-html/index";
import Loader from "@components/loader/index";

import "./index.scss";
import Text from "../text";
import CarouselCustom from "../carousel";
import VideoAnimation from "../video-animation/index";
import ShurikenRow from "../shuriken/Row";
import ButtonLink from "../button/Link";

const Postlist = ({ entries, isLoading }) => {
  return (
    <Container className="Postlist">
      {isLoading && <Loader visible={isLoading} />}
      {entries &&
        entries.map((e, i) => {
          const postUrl = `/${encodeURI(e.slug)}`;
          return (
            <div className="Postlist__item" key={i}>
              <Row align="center">
                <Col xs={12} md={5} push={{ md: i % 2 !== 0 ? 7 : 0 }}>
                  <Reveal effect={"blurIn"}>
                    <ShurikenRow items={6} striped rotate />
                    <Text>
                      <h5>
                        <ConvertHtml html={e.summary} />
                      </h5>
                    </Text>
                    <ButtonLink
                      className="Postlist__item__seeMore"
                      to={postUrl}
                    >
                      Ver mais
                    </ButtonLink>
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
              <Reveal effect={"blurIn"}>
                <hr className="Postlist__item__hr" />
              </Reveal>
            </div>
          );
        })}
    </Container>
  );
};

Postlist.propTypes = {};

Postlist.defaultProps = {};

export default Postlist;
