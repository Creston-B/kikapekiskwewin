import styles from "../styles/People.module.scss";
import React, { Component } from "react";
import Image from "next/image";
import { Card } from "react-bootstrap";

export default class UserCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false,
    };
  }
  render() {
    const {
      name,
      title,
      image,
      description,
      linkedin,
      twitter,
      facebook,
      weblink,
    } = this.props;
    return (
      <Card
        className={`h-100 ${styles["user-card"]} ${
          this.state.focused ? styles["user-card-focus"] : ""
        }`}
      >
        <div
          className={`${styles["user-card-blur"]}
          ${this.state.focused ? styles["user-card-doblur"] : ""} pt-3 p-2 `}
        >
          <div
            onMouseEnter={(e) => {
              description ? this.setState({ focused: true }) : null;
            }}
            onMouseLeave={(e) => {
              setTimeout(() => {
                this.setState({ focused: false });
              }, 250);
            }}
          >
            <Image
              src={image}
              alt={name}
              width={300}
              height={300}
              layout="responsive"
              className="card-image"
            />
          </div>
          <Card.Body className="user-card-body">
            <Card.Title>{name}</Card.Title>
            <Card.Text>{title}</Card.Text>
            {linkedin ? (
              <Card.Link
                href={linkedin}
                className="text-decoration-none text-reset"
              >
                <div className="align-middle">
                  <Image
                    src="/In-Blue-Logo.png"
                    width={21}
                    height={21}
                    alt="linkedin"
                  />
                  <span className="align-top"> LinkedIn</span>
                </div>
              </Card.Link>
            ) : (
              []
            )}
            {twitter ? (
              <Card.Link
                href={twitter}
                className="text-decoration-none text-reset"
              >
                <div className="align-middle">
                  <Image
                    src="/twitter-social-blue.svg"
                    width={21}
                    height={21}
                    alt="twitter"
                  />
                  <span className="align-top"> Twitter</span>
                </div>
              </Card.Link>
            ) : (
              []
            )}
            {facebook ? (
              <Card.Link
                href={facebook}
                className="text-decoration-none text-reset"
              >
                <div className="align-middle">
                  <Image
                    src="/f_logo_RGB-Blue_144.png"
                    width={21}
                    height={21}
                    alt="facebook"
                  />
                  <span className="align-top">Facebook</span>
                </div>
              </Card.Link>
            ) : (
              []
            )}
            {weblink ? (
              <Card.Link
                href={`https://${weblink}`}
                className="text-decoration-none text-reset"
              >
                <div className="align-middle">
                  <Image
                    src="/globe-4286.svg"
                    width={21}
                    height={21}
                    alt="website"
                  />
                  <span className="align-top"> {weblink}</span>
                </div>
              </Card.Link>
            ) : (
              []
            )}
          </Card.Body>
        </div>
        {description ? (
          <div
            className={`${
              this.state.focused ? styles["user-card-detail-show"] : ""
            } ${styles["user-card-detail"]}`}
          >
            <p
              className={`${styles["user-card-detail-text"]}  pt-3 p-2`}
              dangerouslySetInnerHTML={{ __html: description }}
            ></p>
          </div>
        ) : (
          []
        )}
      </Card>
    );
  }
}
