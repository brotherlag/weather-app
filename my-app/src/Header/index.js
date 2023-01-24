import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./header.scss";

function Header() {
  return (
    <Navbar bg="dark" expand="md" className="mb-4" d="flex 100%">
      <Container>
        <p className="h-1">Weather Forecasts</p>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto mb-2 mb-lg-0">
            <Nav.Link href="#home" className="h-2">Home</Nav.Link>
            <Nav.Link href="#about" className="h-2">About</Nav.Link>
            <Nav.Link href="#contact" className="h-2">Contact</Nav.Link>
            <NavDropdown title="Useful Links" id="basic-nav-dropdown" m="auto">
              <NavDropdown.Item href="#action/3.1">Global Weather</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Weather Analytics</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Satelite Data</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;