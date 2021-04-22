import React from "react";

import "./index.scss";
import { Link } from "react-router-dom";

export default class NotFoundView extends React.Component {
  render() {
    return (
      <div className="NotFound">
        <h1>OOpss... :(</h1>
        <br />
        <h4>Se perdeu? Sem problemas!</h4>
        <h4 className="italic">got lost? No problems!</h4>
        <br />
        <br />
        <Link to="/">Voltar para um local seguro</Link>
        <Link to="/" className="italic">
          <em>Back to safe place</em>
        </Link>
      </div>
    );
  }
}
