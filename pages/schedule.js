import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Layout from "../components/Layout";
import { Container, Row, Col } from "react-bootstrap";
import ScheduleList from "../components/ScheduleList"
import schedule from "../public/Schedule.json";

export default function Schedule({scheduleData}) {
  return (
    <Layout>
      <Head>
        <title>Kikapekiskwewin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles["main"]}`}>
        <Container >
          <h1>June 14, 2022</h1>
          <Row>
            <Col>
            <ScheduleList scheduleData={scheduleData} day={"14"}/>
            </Col>
          </Row>
          <h1>June 15, 2022</h1>
          <Row>
            <Col>
            <ScheduleList scheduleData={scheduleData} day={"15"}/>
            </Col>
          </Row>
        </Container>
      </main>
    </Layout>
  );
}

export async function getStaticProps(context) {
  const scheduleData = schedule;

  if (!scheduleData) {
    return {
      notFound: true,
    };
  }

  return {
    props: { scheduleData },
  };
}