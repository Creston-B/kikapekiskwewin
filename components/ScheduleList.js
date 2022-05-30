import React, { Component } from "react";
import ScheduleItem from "./ScheduleItem";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../styles/Schedule.module.scss";
import { DateTime } from "luxon";

export default class ScheduleList extends Component {
  render() {
    const { scheduleData, day } = this.props;
    const items = scheduleData.items
      .filter((a) => DateTime.fromISO(a.startTime).toFormat("d") == day)
      .sort((a, b) => (a.startTime > b.startTime ? 1 : -1));

    if (Object.keys(items).length == 0) {
      return null;
    }

    return (
      <Container className={`container-fluid`}>
        <Row className="justify-content-center row-cols-auto">
          {items.map((item) => (
            <Col className="mb-3" key={item.title}>
              <ScheduleItem
                startTime={DateTime.fromISO(item.startTime)}
                endTime={DateTime.fromISO(item.endTime)}
                title={item.title}
                presenters={item.presenters}
              />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}
