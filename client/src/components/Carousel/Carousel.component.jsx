import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import CarouselContent from '../CarouselContent/CarouselContent.component';
import CarouselModal from '../CarouselModal/CarouselModal.component';
import { fetchMoviesList } from '../../redux/movie/movie.actions';

import './Carousel.styles.scss';

const Carousel = ({ fetchMovies, moviesList }) => {
  const [currentModal, setCurrentModal] = useState({});
  const numbersOfMovieOnCarousel = 4;

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  const getModal = movie => setCurrentModal(movie);

  return (
    <>
      <div
        id="IntroductionCarousel"
        className="carousel slide"
        data-ride="carousel"
        data-interval="40000"
      >
        {/* Create Indicator */}
        <ol className="carousel-indicators">
          {/* Funny ways to create an array with length */}
          {/* {new Array(numbersOfMovieOnCarousel).fill(null).map((_, index) => ( */}
          {[...new Array(numbersOfMovieOnCarousel)].map((_, index) => (
            <li
              data-target="#IntroductionCarousel"
              data-slide-to={index}
              className={index === 0 ? 'active' : ''}
            />
          ))}
        </ol>
        {/* Create left,right button */}
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
        {/* Content */}
        <div className="carousel-inner">
          {moviesList
            .filter((_, index) => index < numbersOfMovieOnCarousel)
            .map((movie, index) => (
              <CarouselContent
                key={movie.maPhim}
                movie={movie}
                index={index}
                getModal={getModal}
              />
            ))}
        </div>
      </div>

      <CarouselModal movie={currentModal} />
    </>
  );
};

const mapStateToProps = ({ movie }) => ({
  moviesList: movie.moviesList
});

const mapDispatchToProps = dispatch => ({
  fetchMovies: () => dispatch(fetchMoviesList())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Carousel);
