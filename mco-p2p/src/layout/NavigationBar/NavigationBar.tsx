import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Offcanvas from "react-bootstrap/Offcanvas";

import styled from "styled-components";
import styles from "./NavigationBar.module.scss";

import swords from "./../../resources/images/sword.png";

import { useState } from "react";
import Flex from "../Flex/Flex";
import SwitchButton from "../../controls/SwitchButton/SwitchButton";

const AdaptiveMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export default function NavigationBar() {
  const [isVisible, setVisible] = useState(false);
  const [theme, setTheme] = useState("light");

  const showHandler = () => setVisible(true);
  const closeHandler = () => setVisible(false);

  const toggleTheme = (theme: string) => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <>
      <Offcanvas
        show={isVisible}
        placement={"start"}
        onHide={closeHandler}
        scroll={true}
        backdrop={true}
        className={styles.offcanvas}
      >
        <Offcanvas.Header closeButton>
          <Flex direction="column" align="center" justify="center">
            <img src={swords} alt="RPG Utils"></img>
            <Offcanvas.Title></Offcanvas.Title>
          </Flex>
        </Offcanvas.Header>
        <Offcanvas.Body>Body</Offcanvas.Body>
      </Offcanvas>
      <Navbar bg="light" expand="md" className={styles.styledNavbar}>
        <Container className={styles.navbarContainer}>
          <Navbar.Brand>
            <b>Available utils</b>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className={styles.toggle}
          >
            <AdaptiveMenu>
              <span className={styles.spanline} />
              <span className={styles.spanline} />
              <span className={styles.spanline} />
            </AdaptiveMenu>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={`me-auto ${styles.navs}`}>
              <Nav.Link href="#" className={styles.link} onClick={showHandler}>
                Sign In
              </Nav.Link>
              <Nav.Link href="#" className={styles.link} onClick={showHandler}>
                <b>Sign Up</b>
              </Nav.Link>
              <Nav.Link href="#">
              </Nav.Link>
            </Nav>
            <Nav>
              <Flex direction="row" align="center" justify="center">
                <SwitchButton onClick={() => alert("clicked")} emoji={[String.fromCodePoint(0x1F31E), String.fromCodePoint(0x1F31B)]}/>
              </Flex>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
