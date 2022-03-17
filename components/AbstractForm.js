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
            placeholder="Enter email"
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
          <Form.Text>
            <i className="text-danger">*required</i>
          </Form.Text>
        </Form.Group>
        <Form.Group className="m-4" controlId="formBasicIdentification">
          <Form.Label>Self Identification</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter any Indiginous peoples you identify with"
            className=""
          ></Form.Control>
        </Form.Group>
        <Form.Group className="m-4" controlId="formBasicFile">
          <Form.Label>Abstract</Form.Label>
          <Form.Control required type="file" className=""></Form.Control>
          <Form.Text className="text-muted">
            <i className="text-danger">*required </i>
            Abstracts should be between 200-300 words
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
