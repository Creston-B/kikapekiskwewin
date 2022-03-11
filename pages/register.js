import Head from "next/head";
import styles from "../styles/Register.module.scss";
import Layout from "../components/Layout";
import { Container, Row, Col } from "react-bootstrap";
import Script from "next/script";

export default function Register() {
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
            eventId: "277605514567",
            iframeContainerId: "eventbrite-widget-container-277605514567",
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
          <div id="eventbrite-widget-container-277605514567" >
      </div>
        </Container>
      </main>
    </Layout>
  );
}