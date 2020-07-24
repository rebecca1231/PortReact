import React from "react";

import Jumbo from "../Components/Jumbo";
import { Image, Container, Row, Col } from "react-bootstrap";

function About(props) {
  return (
    <div>
      <Jumbo title={props.title} />
      <Container fluid>
        <Row className="justify-content-center align-items-center ">
          <Col xs={4} md={3} lg={3} xl={2}>
            <Image
              roundedCircle
              fluid
              src={require("../images/mFace.JPG")}
              alt="rebecca-profile-img"
              id="profile-pic"
            />
          </Col>
          <Col xs={6} md={4} lg={4} xl={6}>
            <h1>Hi, I'm Rebecca. </h1>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={8}>
            <p>
              I'm a software engineer specializing in Javascript. I often use
              React, Node JS, and MongoDB to build web applications with
              responsive design and fast functionality.
            </p>

            <p>
              I have experience with libraries like D3 for Data Visualization,
              Bootstrap for styling, and many more.
            </p>

            <p>
              I'm constantly learning new things. Currently those things include
              gaining more experience with cloud engineering and security.
            </p>

            <p>
              My latest project is a simple exercise tracker using Atlas, the
              cloud form of MongoDB. Check it out{" "}
              <a
                href="https://husky-hollow-yarrow.glitch.me/"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>
              . It's part of the Microservices and Api challenges on Free Code
              Camp. I intend to use the knowledge I gained from making this
              simple Api to create more complex and interactive sites in the
              future.
            </p>

            <Row className="justify-content-center align-items-center ">
              <Col>
                <p>
                  When I'm not learning something new chances are I'm playing
                  with my fluffy dog. She loves to fetch and learn new tricks.
                  Tummy rubs are also a major theme.
                </p>
              </Col>
              <Col xs={4} md={3} lg={3} xl={2}>
                <Image
                  rounded
                  fluid
                  src={require("../images/Em2.jpg")}
                  alt="image of my dog"
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
