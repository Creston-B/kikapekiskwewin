import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Layout from "../components/Layout";
import { Container, Row, Col } from "react-bootstrap";

export default function Home() {
  return (
    <Layout className="">
      <Head>
        <title>Kikapekiskwewin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${styles["home-back-image"]}`}></div>
      <main className={`${styles["home-main"]}`}>
        <Container
          className={`${styles["home-content"]}`}
        >
          <Row>
            <Col>
              <h1
                className={`${styles["test-header"]}`}
              >
                some header
              </h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <p
                className={`${styles["test-paragraph"]}`}
              >
                Consequat ad eu veniam dolore anim. Pariatur aute nulla do id
                reprehenderit cillum do nostrud consectetur aliqua sunt cillum
                fugiat labore. Labore consequat in in irure pariatur mollit.
                Commodo eiusmod dolor do tempor nostrud ut do veniam do duis
                exercitation nostrud non.
              </p>
              <p
                className={`${styles["test-paragraph"]}`}
              >
                Consequat ad eu veniam dolore anim. Pariatur aute nulla do id
                reprehenderit cillum do nostrud consectetur aliqua sunt cillum
                fugiat labore. Labore consequat in in irure pariatur mollit.
                Commodo eiusmod dolor do tempor nostrud ut do veniam do duis
                exercitation nostrud non.
                Consequat ad eu veniam dolore anim. Pariatur aute nulla do id
                reprehenderit cillum do nostrud consectetur aliqua sunt cillum
                fugiat labore. Labore consequat in in irure pariatur mollit.
                Commodo eiusmod dolor do tempor nostrud ut do veniam do duis
                exercitation nostrud non.
                Consequat ad eu veniam dolore anim. Pariatur aute nulla do id
                reprehenderit cillum do nostrud consectetur aliqua sunt cillum
                fugiat labore. Labore consequat in in irure pariatur mollit.
                Commodo eiusmod dolor do tempor nostrud ut do veniam do duis
                exercitation nostrud non.
                Consequat ad eu veniam dolore anim. Pariatur aute nulla do id
                reprehenderit cillum do nostrud consectetur aliqua sunt cillum
                fugiat labore. Labore consequat in in irure pariatur mollit.
                Commodo eiusmod dolor do tempor nostrud ut do veniam do duis
                exercitation nostrud non.
              </p>
              <p
                className={`${styles["test-paragraph"]}`}
              >
                Consequat ad eu veniam dolore anim. Pariatur aute nulla do id
                reprehenderit cillum do nostrud consectetur aliqua sunt cillum
                fugiat labore. Labore consequat in in irure pariatur mollit.
                Commodo eiusmod dolor do tempor nostrud ut do veniam do duis
                exercitation nostrud non.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p
                className={`${styles["test-paragraph"]}`}
              >
                Consequat ad eu veniam dolore anim. Pariatur aute nulla do id
                reprehenderit cillum do nostrud consectetur aliqua sunt cillum
                fugiat labore. Labore consequat in in irure pariatur mollit.
                Commodo eiusmod dolor do tempor nostrud ut do veniam do duis
                exercitation nostrud non.

                Consequat ad eu veniam dolore anim. Pariatur aute nulla do id
                reprehenderit cillum do nostrud consectetur aliqua sunt cillum
                fugiat labore. Labore consequat in in irure pariatur mollit.
                Commodo eiusmod dolor do tempor nostrud ut do veniam do duis
                exercitation nostrud non.

                Consequat ad eu veniam dolore anim. Pariatur aute nulla do id
                reprehenderit cillum do nostrud consectetur aliqua sunt cillum
                fugiat labore. Labore consequat in in irure pariatur mollit.
                Commodo eiusmod dolor do tempor nostrud ut do veniam do duis
                exercitation nostrud non.

                Consequat ad eu veniam dolore anim. Pariatur aute nulla do id
                reprehenderit cillum do nostrud consectetur aliqua sunt cillum
                fugiat labore. Labore consequat in in irure pariatur mollit.
                Commodo eiusmod dolor do tempor nostrud ut do veniam do duis
                exercitation nostrud non.
              </p>
              <p
                className={`${styles["test-paragraph"]}`}
              >
                Consequat ad eu veniam dolore anim. Pariatur aute nulla do id
                reprehenderit cillum do nostrud consectetur aliqua sunt cillum
                fugiat labore. Labore consequat in in irure pariatur mollit.
                Commodo eiusmod dolor do tempor nostrud ut do veniam do duis
                exercitation nostrud non.
              </p>
              <p
                className={`${styles["test-paragraph"]}`}
              >
                Consequat ad eu veniam dolore anim. Pariatur aute nulla do id
                reprehenderit cillum do nostrud consectetur aliqua sunt cillum
                fugiat labore. Labore consequat in in irure pariatur mollit.
                Commodo eiusmod dolor do tempor nostrud ut do veniam do duis
                exercitation nostrud non.
              </p>
            </Col>
          </Row>
        </Container>
      </main>
    </Layout>
  );
}
