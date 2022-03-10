import Head from "next/head";
import Image from "next/image";
import styles from "../styles/People.module.scss"
import Layout from "../components/Layout";
import { Container, Row, Col } from "react-bootstrap";
import UserList from "../components/UserList";
import profiles from "../public/Profiles.json";

export default function People({ profiledata }) {
  return (
    <Layout>
      <Head>
        <title>Kikapekiskwewin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles["main"]}`}>
        <Container className="mt-5">
          <Row id="Team" className="mt-4 mb-4">
            <h3 className={`${styles["people-label"]}`}>Hosts</h3>
            <UserList profiledata={profiledata} role="host"></UserList>
          </Row>
          <Row className="mt-4 mb-4">
            <h3 className={`${styles["people-label"]}`}>Presenters</h3>
            <UserList
              profiledata={profiledata}
              role="presenter"
            ></UserList>
          </Row>
        </Container>
      </main>
    </Layout>
  );
}

export async function getStaticProps(context) {
  const profiledata = profiles;

  if (!profiledata) {
    return {
      notFound: true,
    };
  }

  return {
    props: { profiledata },
  };
}
