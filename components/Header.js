import React, { Component } from "react";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
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
      <Navbar variant="dark" expand="lg" className={`navbar`}>
        <Container fluid className="banner">
          <Row className="flex-row w-100">
            <Col className="nav-col col-10 col-lg-4">
              <Navbar.Brand href="/" className="nav-brand">
                <Container fluid className="flex-column flex-nowrap">
                  <Row className="kikapekiskwewin-logo">
                    <Col className="kikapekiskwewin-logo-icon col-8 col-sm-3">
                      <Image
                        src="/kikapekiskwewin-logo-icon.png"
                        objectFit="contain"
                        layout="fill"
                        alt="kikapekiskwewin logo icon"
                      />
                    </Col>
                    <Col className="kikapekiskwewin-logo-text col-8">
                      <Image
                        src="/kikapekiskwewin-logo-crop-stroke-2.png"
                        objectFit="contain"
                        layout="fill"
                        alt="kikapekiskwewin logo"
                      />
                    </Col>
                  </Row>
                </Container>
              </Navbar.Brand>
            </Col>
            <Col className="col-1 col-lg-4 align-self-center">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
            </Col>
          </Row>
          <Row className="container-fluid banner align-self-end  p-0">
            <Navbar.Collapse id="basic-navbar-nav" className="pb-3 justify-content-center">
              <Nav justify className="ml-auto text-end ">
                <Nav.Link className="nav-item" href="/location">
                  <strong>Location</strong>
                </Nav.Link>
                <Nav.Link className="nav-item" href="/people">
                  <strong>Presenters</strong>
                </Nav.Link>
                <Nav.Link className="nav-item" href="/schedule">
                  <strong>Schedule</strong>
                </Nav.Link>
                <Nav.Link className="nav-item" href="/register">
                  <strong>Register</strong>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Row>
        </Container>
      </Navbar>
    );
  }
}
