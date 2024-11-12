import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavbarComponent.css";

function NavbarComponent() {
  return (
    <nav>
      <Navbar expand="lg" className="custom-navbar">
        <Container>
          <Navbar.Brand href="/profile">
            <img src={`/assets/logo/logo-navbar.png`} width={200} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="navbar-title" href="/">
                Login
              </Nav.Link>
              <Nav.Link className="navbar-title" href="/profile">
                Recipes
              </Nav.Link>
              <Nav.Link className="navbar-title" href="/favorites">
                Favorites
              </Nav.Link>
              <Nav.Link className="navbar-title" href="/signup">
                Signup
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>
  );
}

export default NavbarComponent;
