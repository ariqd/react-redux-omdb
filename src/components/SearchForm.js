import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"
import Button from "react-bootstrap/Button"

const SearchForm = () => {
  return (
    <div class="p-5 mb-4 bg-dark text-light rounded-3">
      <Container fluid className="py-5">
        <h1 class="display-5 fw-bold">Welcome to The Movie Search</h1>
        <Col md="8" className="fs-4">
          Find your favorite Movies or Series here
        </Col>
        <Form>
          <Row className="align-items-center mt-4">
            <Col xs={12} md={9}>
              <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                Name
              </Form.Label>
              <Form.Control
                className="mb-2"
                id="inlineFormInput"
                placeholder="Search Movies or TV Series..."
                autoFocus
              />
            </Col>
            <Col xs={12} md={3} className="d-grid gap-2">
              <Button type="submit" className="mb-2 btn-warning">
                Search
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  )
}

export default SearchForm
