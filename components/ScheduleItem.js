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
    let Time_Simple_Offset = { ...DateTime.TIME_SIMPLE, timeZoneName: "short" };
    return (
      <Card className={`${styles["schedule-card"]} h-100 pb-4`}>
        <h4 className={`${styles["schedule-header"]}`}>{title}</h4>
        <div className="card-body">
          {presenters ? (
            <span className={`${styles["schedule-presenters"]}`}>
              Presented by: {presenters}
            </span>
          ) : null}
        </div>
        {Intl.DateTimeFormat().resolvedOptions().timeZone ==
        "America/Edmonton" ? (
          <div className="card-footer">
            <span className={`${styles["schedule-time"]} fw-bold`}>
              {startTime.toLocaleString(DateTime.TIME_SIMPLE)}
              {" - "}
              {endTime.toLocaleString(DateTime.TIME_SIMPLE)}
            </span>
          </div>
        ) : (
          <div className="card-footer">
            <span className={`${styles["schedule-time"]} fw-bold`}>
              {startTime.toLocaleString({
                timeZone: "America/Edmonton",
                ...Time_Simple_Offset,
              })}
              {" - "}
              {endTime.toLocaleString({
                timeZone: "America/Edmonton",
                ...Time_Simple_Offset,
              })}
            </span>
            <br />
            <span className={`${styles["schedule-time"]} text-muted`}>
              {startTime.toLocaleString(Time_Simple_Offset)}
              {" - "}
              {endTime.toLocaleString(Time_Simple_Offset)}
            </span>
          </div>
        )}
      </Card>
    );
  }
}
