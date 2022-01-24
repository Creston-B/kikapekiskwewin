import React, { Component } from "react";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import styles from "../styles/Home.module.scss";
import Image from "next/dist/client/image";

export default class HeaderComponent extends Component {
  render() {
    return (
      <header className={`${styles.header}`}>
        <NavComponent />
      </header>
    );
  }
}

class NavComponent extends Component {
  render() {
    return (
      <Navbar variant="dark" expand="lg" className={styles["navbar"]}>
        <Container fluid className="flex-nowrap">
          <Navbar.Brand href="/" className="container-fluid">
            <h3 className={styles["brand-text"]}>placeholder brand</h3>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto text-end">
              <Nav.Link className="" href="#About">
                <strong>About</strong>
              </Nav.Link>
              <Nav.Link className="" href="#Team">
                <strong>Team</strong>
              </Nav.Link>
              <Nav.Link className="" href="#Schedule">
                <strong>Schedule</strong>
              </Nav.Link>
              <Nav.Link className="" href="#Present">
                <strong>Present</strong>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
