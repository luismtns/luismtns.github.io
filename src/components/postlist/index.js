import React, { useState } from "react";
import PropTypes from "prop-types";
import { Col, Container, Hidden, Row, Visible } from "react-grid-system";
import Reveal from "react-reveal/Reveal";
import { FaSearchMinus, FaSearchPlus } from "react-icons/fa";

import ConvertHtml from "@components/convert-html/index";
import Loader from "@components/loader/index";

import "./index.scss";
import Text from "../text";
import CarouselCustom from "../carousel";
import VideoAnimation from "../video-animation/index";
import ShurikenRow from "../shuriken/Row";
import ButtonLink from "../button/Link";
import { getParagraphs, getTitle } from "../../utils/html";
import Button from "../button/index";

const Postlist = ({ entries, isLoading }) => {
  const [zoomVideo, setZoomVideo] = useState(-1);
  const onClickZoom = (index) => {
    setZoomVideo(index > -1 && index != zoomVideo ? index : -1);
  };
  return (
    <Container className="Postlist">
      {isLoading && <Loader visible={isLoading} />}
      {entries &&
        entries.map((e, i) => {
          const postUrl = `/${encodeURI(e.slug)}`;
          return (
            <section className="Postlist__item" key={i}>
              <Row align="center">
                <Col xs={12}>
                  {getTitle(e.caption).map((h, k) => (
                    <Reveal key={k} effect={"blurIn"}>
                      <Text align={"center"}>
                        <ConvertHtml html={h} />
                      </Text>
                    </Reveal>
                  ))}
                  {/* <ButtonLink
                      className="Postlist__item__seeMore"
                      to={postUrl}
                    >
                      Ver mais
                    </ButtonLink> */}
                </Col>
                <Col
                  xs={12}
                  md={zoomVideo == i ? 12 : 6}
                  offset={{ md: zoomVideo == i ? 0 : 3 }}
                >
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
                  <Button
                    onClick={() => onClickZoom(i)}
                    clear
                    className={"ZoomBtn"}
                  >
                    {zoomVideo == i ? <FaSearchMinus /> : <FaSearchPlus />}
                  </Button>
                </Col>
                <Col xs={12} md={8} offset={{ md: 2 }}>
                  {getParagraphs(e.caption).map((p, k) => (
                    <Reveal key={k} effect={"blurIn"}>
                      <Text>
                        <ConvertHtml html={p} />
                      </Text>
                    </Reveal>
                  ))}
                </Col>
              </Row>
              <Reveal effect={"blurIn"}>
                <Visible xs sm>
                  <ShurikenRow items={12} striped rotate />
                </Visible>
                <Hidden xs sm>
                  <ShurikenRow items={24} striped rotate />
                </Hidden>
              </Reveal>
            </section>
          );
        })}
    </Container>
  );
};

Postlist.propTypes = {};

Postlist.defaultProps = {};

export default Postlist;
