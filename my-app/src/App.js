import Container from "react-bootstrap/Container";
import Body from "./Body";
import Header from "./Header";
import Footer from "./Footer";
import "./index.scss"

function App() {
  return (
    <Container>
      <Header />
      <Body />
      <Footer />
    </Container>
  );
}

export default App;
