import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Location.module.scss";
import Layout from "../components/Layout";
import { Container, Row, Col } from "react-bootstrap";

export default function Location() {
  return (
    <Layout>
      <Head>
        <title>kikapekiskwewin - Location</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${styles["location-image-bg"]}`}>
        <div className={`${styles["location-image-box"]}`}>
          <Image
            src="/NAlberta.jpg"
            width={100}
            height={100}
            layout="responsive"
            objectFit="cover"
            alt="Northern Alberta"
            className={`${styles["location-image"]}`}
          />
        </div>
      </div>
      <main className={`${styles["main"]}`}>
        <Container className={`${styles["content"]}`}>
          <h1 className={`mt-4 mb-4`}>Athabasca</h1>
          <Row>
            <Col>
              <p>
                In 1876 the Cree, Dene Suline, Saulteaux, and Nakota Sioux
                peoples signed Treaty 6 to share the land to the depth of a plow
                with the Queen&apos;s representatives. Although a treaty was
                signed between sovereign nations, Indigenous people were
                subjected to the colonial Indian Act and reserve system. There
                are eight Metis settlements established in the last years of the
                Great Depression. Athabasca University is located within Treaty
                6 territory in the town of Athabasca. The Athabasca River
                separates Treaty 6 and Treaty 8 located to the north. There are
                eleven numbered treaties across Canada signed between 1871 and
                1921.
              </p>
            </Col>
          </Row>
        </Container>
      </main>
    </Layout>
  );
}