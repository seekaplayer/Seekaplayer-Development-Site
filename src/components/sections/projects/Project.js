import React from "react";
import { Card } from "react-bootstrap";
const Project = ({ image, name, description, link, target }) => {
  return (
    <>
      <Card>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <a
            target={target}
            className="btn btn-primary"
            href={link}
            variant="primary"
          >
            Visit Project
          </a>
        </Card.Body>
      </Card>
    </>
  );
};

export default Project;
