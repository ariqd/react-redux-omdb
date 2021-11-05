import { forwardRef } from "react"
import Col from "react-bootstrap/Col"
import Image from "react-bootstrap/Image"
import "../index.css"

const MovieCard = forwardRef(({ movie, handleShow }, ref) => {
  return (
    <Col xs={12} md={3}>
      <div
        onClick={() => handleShow(movie.imdbID)}
        className="movie-card"
        ref={ref}
      >
        <Image src={movie.Poster} fluid />
        <h4 className="mt-3 movie-title">{movie.Title}</h4>
        <p>{movie.Year}</p>
      </div>
    </Col>
  )
})

export default MovieCard
