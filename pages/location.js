import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Location.module.scss";
import Layout from "../components/Layout";
import { Container, Row, Col } from "react-bootstrap";
import Covid19Alert from "../components/Covid19-Alert";

export default function Location() {
  return (
    <Layout>
      <Covid19Alert />
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
        <Container className={`${styles["athabasca-blurb"]}`}>
          <h1 className={`mt-4 mb-4`}>Athabasca</h1>
          <Row>
            <Col>
              <p>
                In 1876 the Cree, Dene Suline, Saulteaux, and Nakota Sioux
                peoples signed Treaty 6 to share the land to the depth of a plow
                with the Queen&apos;s representatives. Although a treaty was
                signed between sovereign nations, Indigenous people were
                subjected to the colonial Indian Act and reserve system. There
                are eight Métis settlements established in the last years of the
                Great Depression. Athabasca University is located within Treaty
                6 territory in the town of Athabasca. The Athabasca River
                separates Treaty 6 and Treaty 8 located to the north. There are
                eleven numbered treaties across Canada signed between 1871 and
                1921.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <main className={`${styles["main"]}`}>
        <Container className="pt-5">
          <Row className="pt-5 pb-5">
            <h2>Event Locations</h2>
          </Row>
          <Row className="pb-5">
            <Col className="ps-3 pb-3">
              <h3 className="">Athabasca Regional Multiplex</h3>
              <h5 className="lh-sm lead"> 2 University Dr, Athabasca</h5>
              <div>Our main location for the event.</div>
            </Col>
            <Col>
              <iframe
                title="multiplexMap"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9218.182372491805!2d-113.3121452!3d54.7176174!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4d187f1b0b6452c9!2sAthabasca%20Regional%20Multiplex!5e0!3m2!1sen!2sca!4v1653680160873!5m2!1sen!2sca"
                allowFullScreen="true"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </Col>
          </Row>
          <Row className="pb-5">
            <Col className="ps-3 pb-3">
              <h3 className="">Athabasca Native Friendship Centre</h3>
              <h5 className="lh-sm lead"> 4919 53 St, Athabasca</h5>
              <div>Location for official lunch.</div>
            </Col>
            <Col>
              <iframe
                title="friendshipCenterMap"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2304.3651708546745!2d-113.29069779999999!3d54.720791299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a3d710b0bf270f%3A0x37f4776de157cc2d!2sAthabasca%20Native%20Friendship%20Centre!5e0!3m2!1sen!2sca!4v1653680928579!5m2!1sen!2sca"
                allowFullScreen="true"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </Col>
          </Row>
          <Row className="pt-5 pb-5">
            <h2>Other Important Locations in Athabasca</h2>
          </Row>
          <Row className="pb-5">
            <Col className="ps-3 pb-3">
              <h3 className="">Days Inn by Wyndham Athabasca</h3>
              <h5 className="lh-sm lead"> 2805 48 Ave, Athabasca</h5>
              <div>
                A local hotel where a number of our organizers are staying. Days Inn offers a discount to AU faculty and staff.
              </div>
            </Col>
            <Col>
              <iframe
                title="daysInnMap"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9217.806808473193!2d-113.2490163!3d54.7192691!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x616e66326b862c95!2sDays%20Inn%20by%20Wyndham%20Athabasca!5e0!3m2!1sen!2sca!4v1653681295355!5m2!1sen!2sca"
                allowFullScreen="true"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </Col>
          </Row>
          <Row className="pb-5">
            <Col className="ps-3 pb-3">
              <h3 className="">Johnny&#39;s Eatery</h3>
              <h5 className="lh-sm lead"> 4904 50 St, Athabasca</h5>
              <div>
                A local restaurant that offers a number of Vegan-friendly
                options.
              </div>
            </Col>
            <Col>
              <iframe
                title="johnnysEateryMap"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2304.4268161508494!2d-113.2876668478639!3d54.71970688019296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a3d7ad246afe5b%3A0x9bc8f7689b417f45!2sJohnny&#39;s%20Eatery!5e0!3m2!1sen!2sca!4v1653681385127!5m2!1sen!2sca"
                allowFullScreen="true"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </Col>
          </Row>
          <Row className="pb-5">
            <Col className="ps-3 pb-3">
              <h3 className="">Sal&#39;s Famous</h3>
              <h5 className="lh-sm lead"> 5012 50 Ave, Athabasca</h5>
              <div>
                A local restaurant that offers a number of gluten free options.
              </div>
            </Col>
            <Col>
              <iframe
                title="salsFamousMap"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d901.3838169636042!2d-113.28696594975789!3d54.72048748732827!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9321b477427b99cc!2sSal&#39;s%20Famous!5e0!3m2!1sen!2sca!4v1653681578096!5m2!1sen!2sca"
                allowFullScreen="true"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </Col>
          </Row>
        </Container>
      </main>
    </Layout>
  );
}
