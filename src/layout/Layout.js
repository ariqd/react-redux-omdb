import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Header from "../components/Header"
import MoviesList from "../components/MoviesList"
import SearchForm from "../components/SearchForm"

const Layout = () => {
  return (
    <Container>
      <Row>
        <Header />
      </Row>
      <Row>
        <SearchForm />
      </Row>
      <Row>
        <MoviesList />
      </Row>
    </Container>
  )
}

export default Layout
