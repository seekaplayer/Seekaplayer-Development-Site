import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="text-center">
      <Container>
        <Row>
          <Col>
            &copy; Seekaplayer {new Date().getFullYear()}, All Rights Reserved.
          </Col>
        </Row>
        <Row className="m-2">
          <Col>
            Made with {<FontAwesomeIcon className="heart" icon={faHeart} />} by
            <a href="https://seekaplayer.com" target="_blank">
              Seekaplayer
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
