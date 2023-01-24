import Container from "react-bootstrap/Container";
import Body from "./Body";
import Header from "./Header";
import "./index.scss"

function App() {
  return (
    <Container className="container">
      <Header className="navbar navbar-expand-md navbar-dark bg-dark"/>
      <Body />
    </Container>
  );
}

export default App;
