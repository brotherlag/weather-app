import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./header.scss";

function Header() {
  return (
    <Navbar bg="dark" expand="md" className="mb-4" d="flex 100%">
      <Container>
        <p className="h-1">Weather Forecasts</p>
      </Container>
    </Navbar>
  );
}

export default Header;