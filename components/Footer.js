import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../styles/Home.module.scss";
import Image from "next/dist/client/image";

export default class FooterComponent extends Component {
  render() {
    return (
      <footer className={`footer`}>
        <Container className="">
          <h5 className="fit-content ml-auto inline-block text-end">
            <a href="mailto:kikapekiskwewin@gmail.com">
              Contact Us - kikapekiskwewin@gmail.com
            </a>
          </h5>
        </Container>
        <Row className="align-items-end w-100">
          <Col className="m-2">
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
          <Col className="m-2">
            © Creston Barker -{" "}
            <a href="mailto:creston@barkerdev.com">creston@barkedev.com</a> 2021
          </Col>
          <div className="w-100 d-block d-sm-none"></div>
          <Col className="m-2">
            <a href="https://artcanheal.ca/">Art © Jean E Tait - artcanheal.ca</a>{" "}
            - used under license
          </Col>
          <Col className="justify-content-end m-2">
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
      </footer>
    );
  }
}
