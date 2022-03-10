import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Present.module.scss";
import Layout from "../components/Layout";
import { Container, Row, Col } from "react-bootstrap";

export default function Present() {
  return (
    <Layout>
      <Head>
        <title>Kikapekiskwewin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles["main"]}`}>
        <Container >
          <h1>Work In Progress</h1>
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
