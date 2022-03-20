import React, { Component } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import styles from "../styles/Home.module.scss";
export default class AbstractForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      validated: false,
      submitted: false,
      error: false,
      error_text: "",
    };
  }

  render() {
    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }

      this.setState({ validated: true });
      event.preventDefault();
      try {
        const sendForm = async () => {
          const res = await fetch("/api/formemail", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: event.target.formBasicEmail.value,
              name: event.target.formBasicName.value,
            }),
          });
          const status = await res.status;
          if (status != 200) {
            throw `Request failed: ${status}`;
          }
        };
        sendForm().catch((err) => {
          this.setState({ error: true, error_text: err });
        });
      } catch (error) {
        this.setState({ error: true, error_text: error.message });
      }
    };
    return (
      <Form
        validated={this.state.validated}
        onSubmit={handleSubmit}
        className={`${styles["abstract-form"]}`}
      >
        <h3 className="m-2">Submit an Abstract</h3>
        <Form.Group className="m-4" controlId="formBasicEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Enter your email"
            className=""
          ></Form.Control>
          <Form.Text>
            <i className="text-danger">*required</i>
          </Form.Text>
        </Form.Group>
        <Form.Group className="m-4" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type="name"
            placeholder="Enter your name"
            className=""
          ></Form.Control>
          <Form.Text className="text-muted">
            <i className="text-danger">*required </i> Enter the same name that
            you register with in Eventbrite.
          </Form.Text>
        </Form.Group>
        <Form.Group className="m-4" controlId="formBasicIdentification">
          <Form.Label>Self Identification</Form.Label>
          <Form.Control
            type="text"
            placeholder="Deceleration of identity"
            className=""
          ></Form.Control>
          <Form.Text className="text-muted">
            <i className="text-danger">*required </i> Submissions will be
            limited to those that self-identify as Indigenous. Please provide
            specific information to indicate if you are First Nations, Inuit, or
            Métis, and if possible your nation / community affiliation.{" "}
          </Form.Text>
        </Form.Group>
        <Form.Group className="m-4" controlId="formBasicFile">
          <Form.Label>Abstract</Form.Label>
          <Form.Control type="file" className=""></Form.Control>
          <Form.Text className="text-muted">
            <i className="text-danger">*required </i>
            Abstracts should be between 200-300 words. Files cannot be larger
            than 10 MB in size.
          </Form.Text>
        </Form.Group>
        <Button type="submit" className="m-4">
          Submit
        </Button>
        {this.state.submitted ? (
          <Alert variant="success">
            <Alert.Heading>Successfully submitted</Alert.Heading>
          </Alert>
        ) : null}
        {this.state.error ? (
          <Alert variant="danger">
            <Alert.Heading>Something went wrong!</Alert.Heading>
            <p>
              If you&apos;re seeing this, something went terribly wrong. Please
              contact creston@barkerdev.ca with your issue.
            </p>
            <p>Error: {this.state.error_text}</p>
          </Alert>
        ) : null}
      </Form>
    );
  }
}
