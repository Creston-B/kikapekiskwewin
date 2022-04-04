import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Layout from "../components/Layout";
import { Container, Row, Col } from "react-bootstrap";
import AbstractForm from "../components/AbstractForm";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>kikapekiskwewin</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="kikapekiskwewin indigenous conference indian ethics culture"></meta>
        <meta name="description" content="Why are cultural values so important to Indigenous people involved in
          research with Indigenous people? A two-day virtual and in-person gathering  on June 14-15, 2022">
      </Head>
      <div className={`${styles["back-image"]}`}></div>
      <div className={`${styles["back-textbox"]}`}>
        <h1 className={`${styles["back-header"]}`}>kikapekiskwewin</h1>
        <h4 className={`${styles["back-subhead"]}`}>
          Why are cultural values so important to Indigenous people involved in
          research with Indigenous people?
        </h4>
      </div>

      <main className={`${styles["main"]}`}>
        <Container className={`${styles["content"]}`}>
          <Row>
            <Col>
              <h1 className={`${styles["content-header"]}`}>
                On June 14-15, 2022
              </h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                <strong>
                  Please join us for a two-day virtual and in-person gathering
                </strong>{" "}
                of Indigenous researchers, Indigenous people involved in
                research, members of research ethics boards, scholars from the
                international community, and national leaders of Indigenous
                organizations to open up conversation on self-determination and
                sovereignty in the context of Indigenous research ethics.
                Grounded in the experiences of Indigenous scholars navigating
                settler colonial research ethics boards’ policies and processes
                at Canadian institutions, this gathering will explore the
                central theme of &quot;parallel pathways&quot; to research
                ethics by 1) centering and exploring how Indigenous people want
                to advance self-determination through Indigenous research
                ethics; and 2) considering how research ethics boards can be
                responsive and accountable to assertions of Indigenous
                self-determination.
              </p>
              <p>
                To open up possibilities for &apos;imagining otherwise&apos;, we
                are inviting abstract submissions of 200 to 250 words from
                researchers, community members, and members of research ethics
                boards both within and outside Canada to facilitate a sharing of
                experiences of how international post-secondary organizations
                operationalize research ethics, and how a centering of
                Indigenous research ethics might illuminate decolonial pathways
                forward.
              </p>
              <div className={`${styles["abstract-banner"]}`}>
                <h2>Now accepting abstracts!</h2>
              </div>
              <p>
                We are accepting abstracts from individual presenters for twenty
                minute oral presentations on the following themes (these are
                just ideas):
              </p>
              <ul>
                <li>
                  Indigenous Languages, Ceremonies, Pedagogical Practice, and
                  Knowledge Systems for Parallel Pathways in Research
                </li>
                <li>Indigenizing the Academy (Research Ethics Policies)</li>
                <li>
                  Indigenous Resurgence (e.g., Health, Science, Education,
                  Economic Development, etc.)
                </li>
                <li>Treaties and Indigenous Legal Traditions</li>
              </ul>
              <p>
                We are accepting abstracts for panel presentations consisting of
                four to five presenters for hour long presentations on the
                following themes (these are just ideas):
              </p>
              <ul>
                <li>Turtle Island Indigenous Research Ethics</li>
                <li>Māori Indigenous Research Ethics</li>
                <li>Australian Indigenous Research</li>
                <li>Indigenous Research Ethics in the Global South</li>
              </ul>
              <p>
                Please submit an abstract to present your paper and register
                through Eventbrite to attend.
              </p>
              <AbstractForm />
              <p>
                The aim of kikapekiskwewin is to inform future research policy
                and practice that shapes the experiences of Indigenous scholars,
                researchers, and research ethics board members in Canada.
                Through this two-day international discussion and collaboration,
                participants may also contribute to a series of reports,
                publications, videos and podcasts on parallel pathways to
                research ethics.
              </p>
            </Col>
          </Row>
        </Container>
      </main>
    </Layout>
  );
}
