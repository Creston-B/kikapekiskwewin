import styles from "../styles/People.module.scss";
import React, { Component } from "react";
import Image from "next/image";
import { Card } from "react-bootstrap";

export default class UserCard extends Component {
  render() {
    const { name, title, image, description, linkedin, twitter, facebook } =
      this.props;
    return (
      <Card className={`h-100 pt-3 p-2 ${styles["user-card"]}`}>
        <div>
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
                <span className="align-top"> Facebook</span>
              </div>
            </Card.Link>
          ) : (
            []
          )}
        </Card.Body>
      </Card>
    );
  }
}
