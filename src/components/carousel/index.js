import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Carousel from "nuka-carousel";

import LazyImage from "../lazy-image";
import Lightbox from "../lightbox";

import "./index.scss";

const CarouselCustom = ({ items }) => {
  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [handleWindowResize]);
  const handleWindowResize = useCallback((event) => {
    setSlidesToShow(getSlidesToShow());
  }, []);

  const getSlidesToShow = () => {
    if (!window) return;
    if (window.innerWidth > 560) {
      return 2;
    } else {
      return 1.5;
    }
  };

  const [lightboxImage, setLightboxImage] = useState(null);
  const [slidesToShow, setSlidesToShow] = useState(getSlidesToShow());
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
        width="100%"
        defaultControlsConfig={{
          prevButtonText: "<",
          prevButtonClassName: "Carousel__prevBtn",
          nextButtonText: ">",
          nextButtonClassName: "Carousel__nextBtn",
        }}
        className="Carousel"
        slidesToShow={slidesToShow}
        height={"70vh"}
        heightMode="current"
        autoplay={true}
        autoplayInterval={10000}
        cellAlign={"center"}
        wrapAround={true}
        dragging={true}
      >
        {items &&
          items.map((e, i) => (
            <LazyImage
              className={"Carousel__image"}
              key={i}
              onClick={() => setLightboxImage(e.original_size.url)}
              src={e.alt_sizes[1].url}
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
