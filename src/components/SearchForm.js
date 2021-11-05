import { connect } from "react-redux"
import {
  searchMovie,
  fetchMovies,
  setLoading,
} from "../redux/actions/searchActions"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"
import Button from "react-bootstrap/Button"
import AutoComplete from "./Autocomplete"

const SearchForm = ({ text, searchMovie, fetchMovies, setLoading }) => {
  const submit = (e) => {
    e.preventDefault()
    fetchMovies(text)
    setLoading()
  }

  return (
    <div className="p-3 mb-4 bg-dark text-light rounded-3">
      <Container fluid className="py-5">
        <h1 className="display-5 fw-bold">Welcome to The Movie Search</h1>
        <Col md="8" className="fs-4">
          Find your favorite Movies or Series here
        </Col>
        <Form onSubmit={(e) => submit(e)}>
          <Row className="align-items-center mt-4">
            <Col xs={12} md={9}>
              <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                Name
              </Form.Label>
              {/* <Form.Control
                // className="mb-2"
                // placeholder="Search Movies or TV Series..."
                autoFocus
                onChange={(e) => searchMovie(e.target.value)}
              /> */}
              <AutoComplete
                className="mb-2"
                placeholder="Search Movies or TV Series..."
                searchMovie={searchMovie}
                suggestions={[
                  "Avengers Endgame",
                  "Avengers Age of Ultron",
                  "Crocodilian",
                  "Death Roll",
                  "Eggs",
                  "Jaws",
                  "Reptile",
                  "Solitary",
                  "Tail",
                  "Wetlands",
                ]}
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

const mapStateToProps = (state) => ({
  text: state.movies.text,
})

export default connect(mapStateToProps, {
  searchMovie,
  fetchMovies,
  setLoading,
})(SearchForm)
