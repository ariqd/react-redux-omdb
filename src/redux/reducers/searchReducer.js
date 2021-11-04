import { SEARCH_MOVIE, FETCH_MOVIES } from "../actions/types"

const initialState = {
  text: "",
  movies: [],
  loading: false,
  movie: [],
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
    default:
      return state
  }
}

export default searchReducer
