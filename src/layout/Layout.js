import { Spinner } from "react-bootstrap"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import { connect } from "react-redux"
import Header from "../components/Header"
import MoviesList from "../components/MoviesList"
import SearchForm from "../components/SearchForm"

const Layout = ({ loading }) => {
  return (
    <Container>
      <Row>
        <Header />
      </Row>
      <Row>
        <SearchForm />
      </Row>
      <Row>
        {loading ? (
          <div className="d-flex justify-content-center">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        ) : (
          <MoviesList />
        )}
      </Row>
    </Container>
  )
}

const mapStateToProps = (state) => ({
  loading: state.movies.loading,
})

export default connect(mapStateToProps)(Layout)
