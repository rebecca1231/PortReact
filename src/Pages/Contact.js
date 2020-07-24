import React from "react";
import Jumbo from "../Components/Jumbo";
import { Container, Row, Col } from "react-bootstrap";

function Contact(props) {
  return (
    <div>
      <Container fluid>
        <Jumbo title={props.title} />

        <Row className="justify-content-center">
          <Col md={6}>
            <p>
              I'm open to new opportunties in web development and software
              engineering. <br/> Let's talk!
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={2}>
            <a class="btn" href="mailto:rebecca@rebeccahirai.com">
              <i className="far fa-envelope"></i> Email
            </a>
          </Col>
          <Col md={2}>
            <a
              class="btn"
              size="lg"
              href="https://www.linkedin.com/in/rebecca-h-3a67401a1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
          </Col>
        </Row>
        <br/> <br/>
        <Row className="justify-content-center">
          <Col md={6}>
            <p>Want to see more? <br />  Click below to see more of my creations. </p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={2}>
            <a
              class="btn"
              href="https://github.com/rebecca1231"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github-square"></i> Github{" "}
            </a>
          </Col>
          <Col md={2}>
            <a
              class="btn"
              href="https://codepen.io/Rebecca07"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-codepen"></i> Code Pen{" "}
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
