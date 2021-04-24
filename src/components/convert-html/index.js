import React from "react";
import PropTypes from "prop-types";

import "./index.scss";

class ConvertHtml extends React.Component {
  dangerouslySetInnerHTML(html) {
    return (
      <div
        dangerouslySetInnerHTML={{ __html: html.replaceAll("b>", "strong>") }}
      />
    );
  }

  render() {
    return this.dangerouslySetInnerHTML(this.props.html);
  }
}

ConvertHtml.propTypes = {};

ConvertHtml.defaultProps = {};

export default ConvertHtml;
