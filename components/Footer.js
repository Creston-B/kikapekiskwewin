import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../styles/Home.module.scss";
import Image from "next/dist/client/image";

export default class FooterComponent extends Component {
  render() {
    return (
      <footer className={styles.footer}>
        <Container className="container">
          <Row>
            <Col>
              <span>
                Creston Barker -{" "}
                <a href="mailto:creston@barkerdev.com">creston@barkedev.com</a>
              </span>
            </Col>
            
          </Row>
          <Row>
            <Col>
              <a href="https://opensource.org/licenses/MIT">MIT license 2021</a>
            </Col>
            <Col className='d-flex justify-content-end'>
              <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Powered by{" "}
                <span className={styles.logo}>
                  <Image
                    src="/vercel.svg"
                    alt="Vercel Logo"
                    width={72}
                    height={16}
                  />
                </span>
              </a>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}
