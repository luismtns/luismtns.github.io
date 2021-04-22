import React from "react";
import PropTypes from "prop-types";
import ConvertHtml from "@components/convert-html/index";
import LazyImage from "@components/lazy-image/index";
import Loader from "@components/loader/index";

import "./index.scss";

const Postlist = ({ entries, isLoading }) => (
  <div className="Postlist">
    <Loader visible={isLoading} />
    {entries &&
      entries.map((e) => {
        const { acf } = e;
        return (
          <div key={e.id}>
            <h1>{acf.titulo_do_projeto}</h1>
            {acf.capa && (
              <LazyImage
                src={acf.capa.sizes.large}
                alt={`Luis Bovo designer and developer - project ${acf.titulo_do_projeto}`}
              />
            )}
            <ConvertHtml html={acf.conteudo} />
            <br />
            <br />
          </div>
        );
      })}
  </div>
);

Postlist.propTypes = {};

Postlist.defaultProps = {};

export default Postlist;
