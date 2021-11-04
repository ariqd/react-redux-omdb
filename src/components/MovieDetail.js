import Modal from "react-bootstrap/Modal"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
// import Button from "react-bootstrap/Button"

const MovieDetail = ({ showDetail, handleClose }) => {
  return (
    <Modal size="lg" show={showDetail} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Movie title</Modal.Title>
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
    </Modal>
  )
}

export default MovieDetail
