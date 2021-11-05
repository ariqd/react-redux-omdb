import {
  SEARCH_MOVIE,
  FETCH_MOVIES,
  LOADING,
  FETCH_MOVIE,
  LOADING_MOVIE,
  APPEND_MOVIES,
} from "./types"
import axios from "axios"

import { key } from "../../key"

export const searchMovie = (text) => (dispatch) => {
  dispatch({
    type: SEARCH_MOVIE,
    payload: text,
  })
}

export const fetchMovies =
  (text, pageNumber = 1) =>
  (dispatch) => {
    axios
      .get(
        `https://www.omdbapi.com/?apikey=${key}&s=${text}&page=${pageNumber}`
      )
      .then((response) =>
        dispatch({
          type: pageNumber === 1 ? FETCH_MOVIES : APPEND_MOVIES,
          payload: response.data,
        })
      )
      .catch((err) => console.log(err))
  }

export const setLoading = () => {
  return {
    type: LOADING,
  }
}

export const fetchMovie = (id) => (dispatch) => {
  axios
    .get(`https://www.omdbapi.com/?apikey=${key}&i=${id}`)
    .then((response) =>
      dispatch({
        type: FETCH_MOVIE,
        payload: response.data,
      })
    )
    .catch((err) => console.log(err))
}

export const setLoadingMovie = () => {
  return {
    type: LOADING_MOVIE,
  }
}
