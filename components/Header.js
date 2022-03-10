import React, { Component } from "react";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import styles from "../styles/Home.module.scss";
import Image from "next/dist/client/image";

export default class HeaderComponent extends Component {
  render() {
    return (
      <header className={`header`}>
        <NavComponent />
      </header>
    );
  }
}

class NavComponent extends Component {
  render() {
    return (
      <Navbar variant="dark" expand="lg" className={`navbar pt-0`}>
        <Container fluid className="banner">
          <Row className="container-fluid flex-row">
            <Col className="container-fluid col-10 col-lg-4 col-2">
              <Navbar.Brand href="/" className="nav-brand">
                <div className="kikapekiskwewin-logo-text">
                  <Image
                    src="/kikapekiskwewin-logo-crop-stroke.png"
                    objectFit="contain"
                    layout="fill"
                    alt="kikapekiskwewin logo"
                  />
                </div>
              </Navbar.Brand>
            </Col>
            <Col className="col-lg-8 col-1 align-self-center">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
            </Col>
          </Row>
          <Row className="container-fluid">
              <Navbar.Collapse id="basic-navbar-nav justify-content-end">
                <Nav justify className="ml-auto text-end">
                  <Nav.Link className="nav-item" href="/location">
                    <strong>Location</strong>
                  </Nav.Link>
                  <Nav.Link className="nav-item" href="/people">
                    <strong>Team &amp; Presenters</strong>
                  </Nav.Link>
                  <Nav.Link className="nav-item" href="/schedule">
                    <strong>Schedule</strong>
                  </Nav.Link>
                  <Nav.Link className="nav-item" href="/present">
                    <strong>Present</strong>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
          </Row>
        </Container>
      </Navbar>
    );
  }
}
