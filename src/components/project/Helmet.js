import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

import "./Helmet.scss";
import capitalize from "@utils/capitalize";

const ProjectHelmet = ({ entry }) => {
  const { slug, summary, thumbnail_url, photos } = entry;
  const location = useLocation();
  const title = `${slug && capitalize(slug.split("-").join(" "))} - LUIS BOVO |
  Designer e Desenvolvedor`;

  const thumb = thumbnail_url
    ? thumbnail_url
    : photos
    ? photos[0].original_size.url
    : "https://luisbovo.com.br/luisbovo-cover.png";
  return (
    <Helmet>
      {/* <!-- Primary Meta Tags --> */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={summary} />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={location.href} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={summary} />
      <meta property="og:image" content={thumb} />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content={thumb} />
      <meta property="twitter:url" content={location.href} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={summary} />
      <meta property="twitter:image" content={thumb} />
      {/* <!-- Meta Tags --> */}
    </Helmet>
  );
};
ProjectHelmet.propTypes = {};

ProjectHelmet.defaultProps = {};

export default ProjectHelmet;
