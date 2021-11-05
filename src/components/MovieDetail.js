import Modal from "react-bootstrap/Modal"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Spinner from "react-bootstrap/Spinner"
import Image from "react-bootstrap/Image"
import { connect } from "react-redux"
// import { useEffect } from "react"

const MovieDetail = ({ showDetail, handleClose, movie, loadingMovie }) => {
  return (
    <Modal size="lg" show={showDetail} onHide={handleClose}>
      {loadingMovie ? (
        <div className="d-flex justify-content-center py-3">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <>
          <Modal.Header closeButton>
            <Modal.Title>
              {movie.Title} &bull;{" "}
              <span className="text-secondary">{movie.Year}</span> &bull;{" "}
              <span className="text-secondary">{movie.Runtime}</span>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col xs={12} md={5}>
                <Image src={movie.Poster} fluid />
              </Col>
              <Col xs={12} md={7}>
                <p>{movie.Plot}</p>

                <p className="mb-0">
                  <span className="fw-bold">Director:</span> {movie.Director}
                </p>
                <p className="mb-0">
                  <span className="fw-bold">Writers:</span> {movie.Writer}
                </p>
                <p className="mb-0">
                  <span className="fw-bold">Actors:</span> {movie.Actors}
                </p>

                <Row className="my-4">
                  {movie.Ratings?.map((rating, index) => (
                    <Col className="text-center" key={index}>
                      <h4>{rating.Value}</h4>
                      <p className="text-secondary">{rating.Source}</p>
                    </Col>
                  ))}
                </Row>

                <Row className="my-4">
                  <Col className="text-center">
                    <h3>{movie.BoxOffice ? movie.BoxOffice : "N/A"}</h3>
                    <p className="text-secondary">Box Office</p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Modal.Body>
        </>
      )}
    </Modal>
  )
}

const mapStateToProps = (state) => ({
  movie: state.movies.movie,
  loadingMovie: state.movies.loadingMovie,
})

export default connect(mapStateToProps)(MovieDetail)
