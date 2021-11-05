import { useCallback, useEffect, useRef, useState } from "react"
import { connect } from "react-redux"
import MovieCard from "./MovieCard"
import MovieDetail from "./MovieDetail"
import {
  fetchMovie,
  setLoadingMovie,
  fetchMovies,
  setLoading,
} from "../redux/actions/searchActions"

const MoviesList = ({
  movies,
  text,
  fetchMovie,
  setLoadingMovie,
  loading,
  fetchMovies,
  setLoading,
  hasMore,
}) => {
  const [showDetail, setShowDetail] = useState(false)
  const [pageNumber, setPageNumber] = useState(1)

  useEffect(() => {
    if (hasMore) {
      fetchMovies(text, pageNumber)
      setLoading()
    }
  }, [pageNumber])

  const handleShow = (id) => {
    setShowDetail(true)
    setLoadingMovie()
    fetchMovie(id)
  }

  const handleClose = () => setShowDetail(false)

  const observer = useRef()
  const lastMovieElementRef = useCallback(
    (node) => {
      if (loading) return
      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1)
        }
      })
      if (node) observer.current.observe(node)
    },
    [loading, hasMore]
  )

  return (
    movies?.Response === "True" && (
      <>
        <div className="mb-3">
          Showing {movies.Search.length} results for "{text}"
        </div>
        {movies.Search.map((movie, index) => {
          if (movies.Search.length === index + 1) {
            return (
              <MovieCard
                key={movie.imdbID}
                movie={movie}
                handleShow={handleShow}
                ref={lastMovieElementRef}
              />
            )
          } else {
            return (
              <MovieCard key={index} movie={movie} handleShow={handleShow} />
            )
          }
        })}

        <MovieDetail showDetail={showDetail} handleClose={handleClose} />
      </>
    )
  )
}

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
  text: state.movies.text,
  loading: state.movies.loading,
  hasMore: state.movies.hasMore,
})

export default connect(mapStateToProps, {
  fetchMovie,
  setLoadingMovie,
  fetchMovies,
  setLoading,
})(MoviesList)
