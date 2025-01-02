import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";


function Contact() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Contact <strong className="purple">Us </strong>
        </h1>
        <br />
        <h2>
            Contact no. - <strong className="purple">+92 1342327894 </strong>
        </h2>
   
      </Container>
    </Container>
  );
}

export default Contact;