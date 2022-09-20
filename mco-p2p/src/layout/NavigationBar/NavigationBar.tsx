import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import styles from "./NavigationBar.module.scss";

export default function NavigationBar() {
  return (
    <Navbar bg="light" expand="md" className={styles.styledNavbar}>
      <Container className={styles.navbarContainer}>
        <Navbar.Brand>v1.0.0</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className={styles.toggle}>
            Toggle Me!
          </span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={`me-auto ${styles.navs}`}>
            <Nav.Link href="#">Sign In</Nav.Link> 
            <Nav.Link href="#">
              <b>Sign Up</b>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
