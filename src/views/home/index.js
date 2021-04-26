import React from "react";

import HomeContainer from "@containers/home";
import Logo from "@components/logo";
import { Helmet } from "react-helmet";
import summaryLargeImage from "./images/summary_large_image.png";

export default class HomeView extends React.Component {
  render() {
    return (
      <div className="HomeView">
        <Helmet>
          <meta name="title" content="LUIS BOVO | Designer e Programador" />
          <meta
            name="description"
            content="Designer que desenvolve aplicações visualmente refinadas e utilizáveis por pessoas. Aqui apresento meus projetos pessoais mais superlativos."
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://luismtns.github.io/" />
          <meta
            property="og:title"
            content="LUIS BOVO | Designer e Programador"
          />
          <meta
            property="og:description"
            content="Designer que desenvolve aplicações visualmente refinadas e utilizáveis por pessoas. Aqui apresento meus projetos pessoais mais superlativos."
          />
          <meta property="og:image" content={summaryLargeImage} />

          <meta property="twitter:card" content={summaryLargeImage} />
          <meta property="twitter:url" content="https://luismtns.github.io/" />
          <meta
            property="twitter:title"
            content="LUIS BOVO | Designer e Programador"
          />
          <meta
            property="twitter:description"
            content="Designer que desenvolve aplicações visualmente refinadas e utilizáveis por pessoas. Aqui apresento meus projetos pessoais mais superlativos."
          />
          <meta property="twitter:image" content={summaryLargeImage} />
        </Helmet>
        <HomeContainer />
      </div>
    );
  }
}
