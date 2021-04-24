import React, { useState } from "react";
import PropTypes from "prop-types";
import Carousel from "nuka-carousel";

import LazyImage from "../lazy-image";
import Lightbox from "../lightbox";

import "./index.scss";

const CarouselCustom = ({ items }) => {
  const [lightboxImage, setLightboxImage] = useState(null);
  const onClickImage = (e) => console.log(e);
  return (
    <div className="CarouselCustom">
      {lightboxImage && (
        <Lightbox
          onClose={() => setLightboxImage(null)}
          visible={lightboxImage ? true : false}
        >
          <LazyImage
            onClick={() => window.open(lightboxImage, "_blank")}
            src={lightboxImage}
            alt={`Lightbox image`}
          />
        </Lightbox>
      )}
      <Carousel
        defaultControlsConfig={{
          prevButtonText: "<",
          prevButtonClassName: "Carousel__prevBtn",
          nextButtonText: ">",
          nextButtonClassName: "Carousel__nextBtn",
        }}
        className="Carousel"
        slidesToShow={2}
        heightMode="first"
      >
        {items &&
          items.map((e, i) => (
            <LazyImage
              key={i}
              onClick={() => setLightboxImage(e.original_size.url)}
              src={e.alt_sizes[2].url}
              alt={`${e.caption}`}
            />
          ))}
      </Carousel>
    </div>
  );
};

CarouselCustom.propTypes = {};

CarouselCustom.defaultProps = {};

export default CarouselCustom;
