import axios from 'axios';

import MovieActionsTypes from './movie.types';
import settings from '../../common/config/setting';

export const getMoviesList = moviesList => ({
  type: MovieActionsTypes.GET_MOVIES_LIST,
  payload: moviesList
});

export const getError = error => ({
  type: MovieActionsTypes.GET_ERROR,
  payload: error
});

export const fetchMoviesList = () => dispatch => {
  axios({
    url: `${settings.domain}/QuanLyPhim/LayDanhSachPhim?maNhom=GP09`,
    method: 'GET'
  })
    .then(result => {
      dispatch(getMoviesList(result.data));
    })
    .catch(error => {
      dispatch(getError(error));
    });
};
