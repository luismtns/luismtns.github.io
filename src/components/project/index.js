import React from "react";
import PropTypes from "prop-types";
import { Col, Container, Row } from "react-grid-system";
import Reveal from "react-reveal/Reveal";
import { FaAngleLeft, FaArrowCircleLeft } from "react-icons/fa";

import "./index.scss";
import ProjectHelmet from "./Helmet";
import Text from "../text/index";
import ConvertHtml from "@components/convert-html";
import CarouselCustom from "../carousel";
import VideoAnimation from "../video-animation/index";
import LazyImage from "../lazy-image";
import ButtonLink from "../button/Link";
import ProjectShare from "./Share";
import LazyVideo from "../lazy-video";

const Project = ({ entry }) => {
  const title = `${entry.slug && entry.slug.split("-").join(" ")}`;
  const thumb =
    entry.type == "video"
      ? entry.video_url
      : entry.photos
      ? entry.photos[0].original_size.url
      : "";
  return (
    entry && (
      <div className="Project">
        {entry && <ProjectHelmet entry={entry} />}
        <ButtonLink to={"/"} className="Project__backBtn">
          <FaArrowCircleLeft />
        </ButtonLink>
        <Container>
          <Row>
            <Col xs={12}>
              <Reveal effect={"blurIn"}>
                <Text className="Project__Caption">
                  <ConvertHtml html={entry.caption} />
                </Text>
              </Reveal>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              {entry.photos && (
                <Reveal effect={"blurIn"}>
                  <CarouselCustom items={entry.photos} height="100vh" />
                </Reveal>
              )}
              {entry.video_url && (
                <Reveal effect={"blurIn"}>
                  <VideoAnimation
                    poster={entry.thumbnail_url}
                    src={entry.video_url}
                  />
                </Reveal>
              )}
              <Text className="Project__Back">
                <ButtonLink to={"/"}>
                  <h4>
                    <FaAngleLeft /> voltar
                  </h4>
                </ButtonLink>
              </Text>
            </Col>
          </Row>
          {/* <Reveal effect={"blurIn"}>
            <ProjectShare />
          </Reveal> */}
        </Container>
      </div>
    )
  );
};

Project.propTypes = {};

Project.defaultProps = {};

export default Project;
