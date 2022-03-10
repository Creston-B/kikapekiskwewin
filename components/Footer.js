import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../styles/Home.module.scss";
import Image from "next/dist/client/image";

export default class FooterComponent extends Component {
  render() {
    return (
      <footer className={`footer`}>
        <Container className="container">
          <Row>
            <Col>
              <span>
                Copyright Creston Barker -{" "}
                <a href="mailto:creston@barkerdev.com">creston@barkedev.com</a>{" "}
                2021
              </span>
            </Col>
          </Row>
          <Row>
            <Col>
              <a
                rel="license"
                href="http://creativecommons.org/licenses/by-nc-nd/3.0/"
              >
                <Image
                  width={60}
                  height={24}
                  alt="Creative Commons License"
                  src="https://i.creativecommons.org/l/by-nc-nd/3.0/88x31.png"
                />
              </a>
              <br />
              This work is licensed under a{" "}
              <a
                rel="license"
                href="http://creativecommons.org/licenses/by-nc-nd/3.0/"
              >
                Creative Commons Attribution-NonCommercial-NoDerivs 3.0 Unported
                License
              </a>
              .
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-end">
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
