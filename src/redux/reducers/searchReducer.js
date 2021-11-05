import {
  SEARCH_MOVIE,
  FETCH_MOVIES,
  LOADING,
  FETCH_MOVIE,
  LOADING_MOVIE,
  APPEND_MOVIES,
} from "../actions/types"

const initialState = {
  text: "",
  movies: [],
  hasMore: false,
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
        movies: [],
        loading: false,
      }
    case FETCH_MOVIES:
      return {
        ...state,
        movies: action.payload,
        hasMore: action.payload.Response === "True",
        loading: false,
      }
    case LOADING:
      return {
        ...state,
        // movies: [],
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
    case APPEND_MOVIES:
      const changeHasMore = action.payload.Response === "True"
      if (changeHasMore) {
        state.movies.Search.push(...action.payload.Search)
      }
      return {
        ...state,
        hasMore: changeHasMore,
        loading: false,
      }
    default:
      return state
  }
}

export default searchReducer
