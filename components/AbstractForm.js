import { RestoreObjectCommand } from "@aws-sdk/client-s3";
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
    function getBase64(file) {
      return new Promise((resolve, reject) => {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
          resolve(reader.result);
        };
        reader.onerror = function (error) {
          console.log("Error: ", error);
          reject(`File read error: ${error}`);
        };
      });
    }

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }

      this.setState({ validated: true, error: false });
      event.preventDefault();
      let comp = this;
      try {
        const sendForm = async () => {

          const file = event.target.formBasicFile.files[0];

          const formData = new FormData();
          formData.append("email", event.target.formBasicEmail.value);
          formData.append("name", event.target.formBasicName.value);
          formData.append(
            "identity",
            event.target.formBasicIdentification.value
          );
          formData.append("file", file);

          const res = await fetch("/api/formemail", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: event.target.formBasicEmail.value,
              name: event.target.formBasicName.value,
              identity: event.target.formBasicIdentification.value,
              file: await getBase64(event.target.formBasicFile.files[0]),
              filename: event.target.formBasicFile.files[0].name,
            }),
          });
          const resstatus = await res.status;
          if (resstatus != 200) {
            throw `Request failed: ${resstatus}`;
          }
          return res;
        };
        sendForm()
          .then((res) => {
            if (res.status === 200) comp.setState({ submitted: true });
            else Promise.reject(`error: ${res.status}`);
          })
          .catch((err) => {
            comp.setState({
              error: true,
              error_text: err.toString(),
              submitted: false,
            });
          });
      } catch (error) {
        this.setState({
          error: true,
          error_text: error.message,
          submitted: false,
        });
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
