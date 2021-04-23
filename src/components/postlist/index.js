import React from "react";
import PropTypes from "prop-types";
import ConvertHtml from "../../components/convert-html/index";
import LazyImage from "../../components/lazy-image/index";
import Loader from "@components/loader/index";

import "./index.scss";
import Text from "../text";
import { Container } from "react-grid-system";
import CarouselCustom from "../carousel";

const Postlist = ({ entries, isLoading }) => (
  <Container className="Postlist">
    <Loader visible={isLoading} />
    {entries &&
      entries.map((e, i) => {
        return (
          <div key={i}>
            <Text>
            <ConvertHtml html={e.reblog.comment} />

            </Text>
            {e.photos && <CarouselCustom items={e.photos} />}
          </div>
        );
      })}
  </Container>
);

Postlist.propTypes = {};

Postlist.defaultProps = {};

export default Postlist;
