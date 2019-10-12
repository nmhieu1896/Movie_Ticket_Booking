import MovieActionsTypes from './movie.types';

const INITIAL_STATE = {
  moviesList: [],
  error: null
};

const MovieReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MovieActionsTypes.GET_MOVIES_LIST:
      return {
        ...state,
        moviesList: action.payload,
        error: null
      };
    case MovieActionsTypes.GET_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default MovieReducer;
