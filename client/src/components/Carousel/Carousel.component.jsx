import React from 'react';

import CarouselImage from '../CarouselImage/CarouselImage.component';

import './Carousel.styles.scss';
// import image from '../../assets/bg.png';

const Carousel = () => (
  <>
    <div
      id="IntroductionCarousel"
      className="carousel slide"
      data-ride="carousel"
      data-interval="false"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#IntroductionCarousel"
          data-slide-to={0}
          className="active"
        />
        <li data-target="#IntroductionCarousel" data-slide-to={1} />
        <li data-target="#IntroductionCarousel" data-slide-to={2} />
      </ol>
      {/* Content */}
      <div className="carousel-inner">
        <CarouselImage />
      </div>
      {/* End of Content */}
      <a
        className="carousel-control-prev"
        href="#IntroductionCarousel"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
      </a>
      <a
        className="carousel-control-next"
        href="#IntroductionCarousel"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
      </a>
    </div>

    <div
      className="modal trailer"
      id="modelId"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="modelTitleId"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-dialog-centered modal-lg"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-body">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/0WWzgGyAH6Y?autoplay=1"
              allow="autoplay"
              allowFullScreen
              title="video"
            />
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Carousel;
