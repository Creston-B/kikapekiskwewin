import React, { Component } from "react";
import Image from "next/image";
import UserCard from "./UserCard";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../styles/People.module.scss";

export default class UserList extends Component {
  render() {
    const { profiledata, role } = this.props;
    const profiles = profiledata.profiles.filter((user) => user.role == role);

    if (Object.keys(profiles).length == 0) {
      return null;
    }

    return (
      <Container className={`container-fluid`}>
        <Row className="justify-content-center row-cols-auto">
          {profiles.map((user) => (
            <Col className="mb-3" key={user.name}>
              <UserCard
                name={user.name}
                title={user.title}
                description={user.description}
                image={user.image || profiledata.defaultImage}
                linkedin={user.linkedin}
                twitter={user.twitter}
                facebook={user.facebook}
                className="flex-column"
              ></UserCard>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}
