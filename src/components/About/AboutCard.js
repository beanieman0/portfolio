import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sparsh Garg </span>
            from <span className="purple"> Delhi, India.</span>
            <br /> I am a Final Year student pursuing B.TECH.
            in Electronics and Communication Engineering from Maharaja Agrasen Institute of Technology.
            <br />
            <br />
            Some of my hobbies are 
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Partying
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening Songs
            </li>
          </ul>
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
