import React from 'react';

import './CarouselModal.styles.scss';

const CarouselModal = ({ movie }) => (
  <div
    className="modal trailer"
    id="modalId"
    tabIndex={-1}
    role="dialog"
    aria-labelledby="modelTitleId"
    aria-hidden="true"
    onClick={() => {
      const trailer = document.querySelector('.iframeTrailer');
      trailer.src = `${movie.trailer}?autoplay=0`;
    }}
  >
    <div
      className="modal-dialog modal-dialog-centered modal-lg"
      role="document"
    >
      <div className="modal-content">
        <div className="modal-body">
          <iframe
            className="iframeTrailer"
            width="100%"
            height="100%"
            src={`${movie.trailer}?autoplay=1`}
            allow="autoplay"
            allowFullScreen
            title="video"
          />
        </div>
      </div>
    </div>
  </div>
);

export default CarouselModal;
