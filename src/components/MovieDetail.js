import Modal from "react-bootstrap/Modal"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Spinner from "react-bootstrap/Spinner"
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
            <Modal.Title>{movie.Title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col xs={12} md={5}>
                Movie Poster
              </Col>
              <Col xs={12} md={7}>
                Movie Details
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
