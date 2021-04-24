import React from "react";
import PropTypes from "prop-types";
import ConvertHtml from "../../components/convert-html/index";
import LazyImage from "../../components/lazy-image/index";
import Loader from "@components/loader/index";
import Fade from "react-reveal/Fade";

import "./index.scss";
import Text from "../text";
import { Container } from "react-grid-system";
import CarouselCustom from "../carousel";
import { TransitionGroup } from "react-transition-group";

const Postlist = ({ entries, isLoading }) => (
  <Container className="Postlist">
    <Loader visible={isLoading} />
    <TransitionGroup>
      {entries &&
        entries.map((e, i) => {
          return (
            <div className="Postlist__item" key={i}>
              <Fade bottom cascade>
                <Text>
                  <ConvertHtml html={e.reblog.comment} />
                </Text>
              </Fade>
              <Fade bottom cascade>
                {e.photos && <CarouselCustom items={e.photos} />}
              </Fade>
            </div>
          );
        })}
    </TransitionGroup>
  </Container>
);

Postlist.propTypes = {};

Postlist.defaultProps = {};

export default Postlist;
