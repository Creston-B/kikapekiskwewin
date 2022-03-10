import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Layout from "../components/Layout";
import { Container, Row, Col } from "react-bootstrap";

export default function Schedule() {
  return (
    <Layout>
      <Head>
        <title>Kikapekiskwewin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles["main"]}`}>
        <Container >
          <h1>June 14-15, 2022</h1>
          <h2>More TBD!</h2>
          <Row>
            <Col>
              <p>
                Check back here for more information coming soon!
              </p>
            </Col>
          </Row>
        </Container>
      </main>
    </Layout>
  );
}
