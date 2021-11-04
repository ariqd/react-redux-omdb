import Col from "react-bootstrap/Col"
import Image from "react-bootstrap/Image"
import { connect } from "react-redux"

const MoviesList = ({ movies }) => {
  return (
    movies.Response === "True" &&
    movies.Search.map((movie, index) => (
      <Col xs={12} md={3} key={index}>
        <Image src={movie.Poster} fluid />
        <h4 className="mt-3">{movie.Title}</h4>
        <p>{movie.Year}</p>
      </Col>
    ))
  )
}

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
})

export default connect(mapStateToProps)(MoviesList)
