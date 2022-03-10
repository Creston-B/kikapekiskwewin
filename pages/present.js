import Head from "next/head";
import styles from "../styles/Present.module.scss";
import Layout from "../components/Layout";
import { Container, Row, Col } from "react-bootstrap";
import Script from "next/script";

export default function Present() {
  return (
    <Layout>
      <Head>
        <title>Kikapekiskwewin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script
        src="https://www.eventbrite.ca/static/widgets/eb_widgets.js"
        onLoad={() => {
          window.EBWidgets.createWidget({
            // Required
            widgetType: "checkout",
            eventId: "267704028957",
            iframeContainerId: "eventbrite-widget-container-267704028957",
            // Optional
            iframeContainerHeight: 425, // Widget height in pixels. Defaults to a minimum of 425px if not provided
          });
        }}
      ></Script>
      <main className={`${styles["main"]}`}>
        <Container>
          <h1>Work In Progress</h1>
          <Row>
            <Col>
              <p>Check back here for more information coming soon!</p>
            </Col>
          </Row>
          <div id="eventbrite-widget-container-267704028957" >
      </div>
        </Container>
      </main>
    </Layout>
  );
}