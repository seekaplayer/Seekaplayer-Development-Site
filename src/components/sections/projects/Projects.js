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
          <Col xs={12} md={4} className="mt-3">
            <Project
              image="./images/seekaplayer-dev.png"
              name="Streamer Search"
              description="This is my portfolio website. The website you're currently on. It has all my projects listed."
              link="https://twitch-streamer-search.seekaplayer.dev"
              target="_blank"
            />
          </Col>
          <Col xs={12} md={4} className="mt-3">
            <Project
              image="./images/twitch-streamer-search.png"
              name="Streamer Search"
              description="Streamer Search uses Twitch's Helix API. It finds the Twitch User you type in."
              link="https://twitch-streamer-search.seekaplayer.dev"
              target="_blank"
            />
          </Col>
          <Col xs={12} md={4} className="mt-3">
            <Project
              image="./images/twitch-streamer-search-2.png"
              name="Streamer Search"
              description="Streamer Search uses Twitch's V5 Kraken API. It queries Twitch Users as you type in a name."
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
