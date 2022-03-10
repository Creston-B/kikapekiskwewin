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
          <Row>
            <Col>
              <p>
                Culpa adipisicing ut nulla laboris in commodo nisi sunt
                cupidatat ullamco velit. Laborum anim aliqua dolore fugiat enim
                et. Duis labore commodo pariatur esse reprehenderit nostrud sit
                anim ea minim sit ex. Sunt voluptate nulla do mollit sunt.
                Eiusmod aute sint cupidatat elit dolor amet nisi. Nulla velit
                nisi exercitation ad reprehenderit voluptate irure aliquip quis
                pariatur ex ipsum. Est aliqua sint ad laborum occaecat in
                occaecat exercitation et excepteur quis anim dolor proident. Ut
                veniam ex consectetur eu do cillum sunt fugiat non.
              </p>
            </Col>
          </Row>
        </Container>
      </main>
    </Layout>
  );
}
