import {
  SEARCH_MOVIE,
  FETCH_MOVIES,
  LOADING,
  FETCH_MOVIE,
  LOADING_MOVIE,
} from "../actions/types"

const initialState = {
  text: "",
  movies: [],
  loading: false,
  movie: [],
  loadingMovie: false,
}

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_MOVIE:
      return {
        ...state,
        text: action.payload,
        loading: false,
      }
    case FETCH_MOVIES:
      return {
        ...state,
        movies: action.payload,
        loading: false,
      }
    case LOADING:
      return {
        ...state,
        movies: [],
        loading: true,
      }
    case FETCH_MOVIE:
      return {
        ...state,
        movie: action.payload,
        loadingMovie: false,
      }
    case LOADING_MOVIE:
      return {
        ...state,
        movie: [],
        loadingMovie: true,
      }
    default:
      return state
  }
}

export default searchReducer
