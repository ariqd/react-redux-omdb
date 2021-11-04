import Col from "react-bootstrap/Col"
import Image from "react-bootstrap/Image"

const MoviesList = () => {
  return (
    <>
      <Col xs={12} md={3}>
        <Image src="https://via.placeholder.com/200x250" fluid />
        <h4 className="mt-3">Movie Name</h4>
        <p>2020</p>
      </Col>
      <Col xs={12} md={3}>
        <Image src="https://via.placeholder.com/200x250" fluid />
        <h4 className="mt-3">Movie Name</h4>
        <p>2020</p>
      </Col>
      <Col xs={12} md={3}>
        <Image src="https://via.placeholder.com/200x250" fluid />
        <h4 className="mt-3">Movie Name</h4>
        <p>2020</p>
      </Col>
      <Col xs={12} md={3}>
        <Image src="https://via.placeholder.com/200x250" fluid />
        <h4 className="mt-3">Movie Name</h4>
        <p>2020</p>
      </Col>
    </>
  )
}

export default MoviesList
