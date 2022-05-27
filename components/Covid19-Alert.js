import { Alert, Button } from "react-bootstrap";
import React, { Component } from "react";

export default class Covid19Alert extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
  }

  render() {
    if (this.state.show) {
      return (
        <div className="sticky-top">
          <Alert
            variant="danger"
            onClose={() => {
              this.setState({ show: false });
            }}
            dismissible
            className="c19-alert"
          >
            <Alert.Heading>Covid 19 Information</Alert.Heading>
            <p>All in-person attendees must be fully vaccinated for Covid-19.</p>
          </Alert>
        </div>
      );
    }
    return null;
  }
}
