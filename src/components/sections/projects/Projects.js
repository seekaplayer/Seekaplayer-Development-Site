import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Projects.css";
import Project from "./Project";
const Projects = () => {
  return (
    <div className="projectSection">
      <Container>
        <Row>
          <Col span={12}>
            <div className="text-center">
              <h2>My Projects</h2>
              <hr />
            </div>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col xs={12} md={4} className="mt-2">
            <Project
              image="./images/twitch-streamer-search.png"
              name="Streamer Search"
              description="Streamer Search uses Twitch's Kraken API. It finds the Twitch User you type in."
              link="https://twitch-streamer-search.seekaplayer.dev"
              target="_blank"
            />
          </Col>
          <Col xs={12} md={4} className="mt-2">
            <Project
              image="./images/twitch-streamer-search-2.png"
              name="Streamer Search"
              description="Streamer Search uses Twitch's Kraken API. It finds the Twitch User you type in."
              link="https://twitch-streamer-search.seekaplayer.dev"
              target="_blank"
            />
          </Col>
          <Col xs={12} md={4} className="mt-2">
            <Project
              image="./images/twitch-streamer-search.png"
              name="Streamer Search"
              description="Streamer Search uses Twitch's Kraken API. It finds the Twitch User you type in."
              link="https://twitch-streamer-search.seekaplayer.dev"
              target="_blank"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
