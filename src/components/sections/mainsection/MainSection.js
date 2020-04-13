import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./MainSection.css";
import ParticleAnimation from "react-particle-animation";
import {
  GitHubIcon,
  TwitchIcon,
  TwitterIcon,
  InstagramIcon,
  YouTubeIcon,
  FacebookIcon,
} from "../../modules/Social";

const MainSection = () => {
  const iconSize = "3x";

  return (
    <div className="mainSection">
      <ParticleAnimation
        interactive={false}
        particleSpeed={0.25}
        numParticles={150}
        color={{ r: 255, g: 255, b: 255, a: 255 }}
        background={{ r: 18, g: 168, b: 224, a: 255 }}
        style={{ position: "absolute", top: 0, width: "100%", height: "100%" }}
      />

      <Container>
        <Row>
          <Col sm={12} md={12} lg={8}>
            <div>
              <h1 className="heading">
                Hello, my name is Seekaplayer and welcome to my portfolio!
              </h1>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="mt-5">
              <TwitchIcon IconSize={iconSize} />
              <GitHubIcon IconSize={iconSize} />
              <TwitterIcon IconSize={iconSize} />
              <InstagramIcon IconSize={iconSize} />
              <YouTubeIcon IconSize={iconSize} />
              <FacebookIcon IconSize={iconSize} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MainSection;
