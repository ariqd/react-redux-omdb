import Col from "react-bootstrap/Col"
import Image from "react-bootstrap/Image"
import { connect } from "react-redux"

const MoviesList = ({ movies, text }) => {
  return (
    movies.Response === "True" && (
      <>
        <div className="mb-3">
          Showing {movies.Search.length} results for "{text}"
        </div>
        {movies.Search.map((movie, index) => (
          <Col xs={12} md={3} key={index}>
            <Image src={movie.Poster} fluid />
            <h4 className="mt-3">{movie.Title}</h4>
            <p>{movie.Year}</p>
          </Col>
        ))}
      </>
    )
  )
}

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
  text: state.movies.text,
})

export default connect(mapStateToProps)(MoviesList)
