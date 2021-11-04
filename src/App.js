import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Header from "./components/Header"
import SearchForm from "./components/SearchForm"

function App() {
  return (
    <Container>
      <Row>
        <Header />
      </Row>
      <Row>
        <SearchForm />
      </Row>
    </Container>
  )
}

export default App
