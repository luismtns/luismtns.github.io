import React from "react";
import PropTypes from "prop-types";
import { Container } from "react-grid-system";
import Fade from "react-reveal/Fade";

import ConvertHtml from "@components/convert-html/index";
import Loader from "@components/loader/index";

import "./index.scss";
import Text from "../text";
import CarouselCustom from "../carousel";
import VideoAnimation from "../video-animation/index";

const Postlist = ({ entries, isLoading }) => (
  <Container className="Postlist">
    <Loader visible={isLoading} />
    {entries &&
      entries.map((e, i) => {
        return (
          <div className="Postlist__item" key={i}>
            <Fade bottom cascade>
              <Text>
                <ConvertHtml html={e.reblog.comment} />
              </Text>
            </Fade>
            {e.photos && (
              <Fade bottom cascade>
                <CarouselCustom items={e.photos} />
              </Fade>
            )}
            {e.video_url && (
              <Fade bottom cascade>
                <VideoAnimation poster={e.thumbnail_url} src={e.video_url} />
              </Fade>
            )}
          </div>
        );
      })}
  </Container>
);

Postlist.propTypes = {};

Postlist.defaultProps = {};

export default Postlist;
