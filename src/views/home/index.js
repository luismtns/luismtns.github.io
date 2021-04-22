import React from "react";

import HomeContainer from "@containers/home";
import Logo from "@components/logo";

export default class HomeView extends React.Component {
  render() {
    return (
      <div className="HomeView">
        {/* <Logo /> */}
        <HomeContainer />
      </div>
    );
  }
}
