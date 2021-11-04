import { useState } from "react"
import { connect } from "react-redux"
import MovieCard from "./MovieCard"
import MovieDetail from "./MovieDetail"

const MoviesList = ({ movies, text }) => {
  const [showDetail, setShowDetail] = useState(false)

  const handleClose = () => setShowDetail(false)
  const handleShow = () => setShowDetail(true)

  return (
    movies.Response === "True" && (
      <>
        <div className="mb-3">
          Showing {movies.Search.length} results for "{text}"
        </div>
        {movies.Search.map((movie, index) => (
          <MovieCard key={index} movie={movie} handleShow={handleShow} />
        ))}

        <MovieDetail showDetail={showDetail} handleClose={handleClose} />
      </>
    )
  )
}

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
  text: state.movies.text,
})

export default connect(mapStateToProps)(MoviesList)
