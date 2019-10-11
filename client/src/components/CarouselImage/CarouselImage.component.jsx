import React from 'react';

import './CarouselImage.styles.scss';
import image from '../../assets/bg.png';

const CarouselImage = () => (
  <>
    <div className="carousel-item active">
      <button
        className="play-button"
        type="button"
        data-toggle="modal"
        data-target="#modelId"
      >
        &#9658;
      </button>
      <div className="overlay"> </div>
      <img src={image} className="d-block w-100 img-carousel" alt="..." />
    </div>
  </>
);

export default CarouselImage;
