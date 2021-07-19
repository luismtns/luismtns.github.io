import React from "react";
import { Helmet } from "react-helmet";

import HomeContainer from "@containers/home";

export default class HomeView extends React.Component {
  render() {
    return (
      <div className="HomeView">
        <Helmet>
          {/* <!-- Primary Meta Tags --> */}
          <title>LUIS BOVO | Designer e Desenvolvedor</title>
          <meta name="title" content="LUIS BOVO | Designer e Desenvolvedor" />
          <meta
            name="description"
            content="Designer e programador, experiência em design e programação web, com projetos em empresas como Vans, Spotify e Sprite. Crie seu site e tenha identidade visual."
          />

          {/* <!-- Open Graph / Facebook --> */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://luisbovo.com.br/" />
          <meta
            property="og:title"
            content="LUIS BOVO | Designer e Desenvolvedor"
          />
          <meta
            property="og:description"
            content="Designer e programador, experiência em design e programação web, com projetos em empresas como Vans, Spotify e Sprite. Crie seu site e tenha identidade visual."
          />
          <meta
            property="og:image"
            content="https://luisbovo.com.br/luisbovo-cover.png"
          />

          {/* <!-- Twitter --> */}
          <meta property="twitter:card" content="./luisbovo-cover.png" />
          <meta property="twitter:url" content="https://luisbovo.com.br/" />
          <meta
            property="twitter:title"
            content="LUIS BOVO | Designer e Desenvolvedor"
          />
          <meta
            property="twitter:description"
            content="Designer e programador, experiência em design e programação web, com projetos em empresas como Vans, Spotify e Sprite. Crie seu site e tenha identidade visual."
          />
          <meta
            property="twitter:image"
            content="https://luisbovo.com.br/luisbovo-cover.png"
          />
          {/* <!-- Meta Tags --> */}
        </Helmet>
        <HomeContainer />
      </div>
    );
  }
}
