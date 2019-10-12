import React from 'react';

import './CarouselContent.styles.scss';
// import image from '../../assets/bg.png';

const CarouselImage = ({ movie, index, getModal }) => (
  <>
    <div className={`carousel-item ${index === 0 ? 'active' : ''}`}>
      <div className="overlay"> </div>
      <button
        className="play-button"
        type="button"
        data-toggle="modal"
        data-target="#modalId"
        onClick={() => getModal(movie)}
      >
        &#9658;
      </button>
      <img
        src={movie.hinhAnh}
        className="d-block w-100 img-carousel"
        alt="..."
      />
    </div>
  </>
);

export default CarouselImage;
