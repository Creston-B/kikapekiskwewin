import styles from "../styles/Schedule.module.scss";
import React, { Component } from "react";
import Image from "next/image";
import { Card } from "react-bootstrap";
import { DateTime } from "luxon";

export default class ScheduleItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { startTime, endTime, title, presenters } = this.props;
    return (
      <Card className={`${styles["schedule-card"]}`}>
        <h4 className={`${styles["schedule-header"]}`}>{title}</h4>
        {Intl.DateTimeFormat().resolvedOptions().timeZone ==
        "America/Edmonton" ? (
          <div>
            <span className={`${styles["schedule-time"]}`}>
              {startTime.toLocaleString(DateTime.TIME_WITH_SHORT_OFFSET)}
              {" - "}
              {endTime.toLocaleString(DateTime.TIME_WITH_SHORT_OFFSET)}
            </span>
          </div>
        ) : (
          <div>
            <span className={`${styles["schedule-time"]}`}>
              {startTime.toLocaleString({
                timeZone: "America/Edmonton",
                ...DateTime.TIME_WITH_SHORT_OFFSET,
              })}
              {" - "}
              {endTime.toLocaleString({
                timeZone: "America/Edmonton",
                ...DateTime.TIME_WITH_SHORT_OFFSET,
              })}
            </span>
            <br />
            <span className={`${styles["schedule-time"]}`}>
              {startTime.toLocaleString(DateTime.TIME_WITH_SHORT_OFFSET)}
              {" - "}
              {endTime.toLocaleString(DateTime.TIME_WITH_SHORT_OFFSET)}
            </span>
          </div>
        )}
      </Card>
    );
  }
}
