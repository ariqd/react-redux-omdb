import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

function App() {
  return (
    <Container>
      <Row>
        <header class="pb-3 mb-4 mt-3 border-bottom">
          <a
            href="/"
            class="d-flex align-items-center text-dark text-decoration-none"
          >
            <span class="fs-4">The Movie Search</span>
          </a>
        </header>
      </Row>
      <Row>
        <div class="p-5 mb-4 bg-light rounded-3">
          <Container fluid className="py-5">
            <h1 class="display-5 fw-bold">Welcome to The Movie Search</h1>
            <Col md="8" className="fs-4">
              Find your favorite Movies or Series here.
            </Col>
          </Container>
        </div>
      </Row>
    </Container>
  )
}

export default App
