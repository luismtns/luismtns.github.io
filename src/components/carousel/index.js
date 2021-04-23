import React from 'react';
import PropTypes from 'prop-types';
import Carousel from 'nuka-carousel';

import LazyImage from '../lazy-image'

import './index.scss';

const CarouselCustom = ({items}) => (
  <div className="CarouselCustom">
    <Carousel defaultControlsConfig={{
      prevButtonText:"<",
      prevButtonClassName:"Carousel__prevBtn",
      nextButtonText:">",
      nextButtonClassName:"Carousel__nextBtn",
    }} className="Carousel" slidesToShow={2} heightMode="first">
      {items && items.map((e,i)=>(
        <LazyImage
        key={i}
          src={e.alt_sizes[2].url}
          alt={`${e.caption}`}
        />
      ))}
      </Carousel>
    
    </div>
);

CarouselCustom.propTypes = {};

CarouselCustom.defaultProps = {};

export default CarouselCustom;
