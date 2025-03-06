import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi All , I am <span className="purple">Neelmani Ram Kripalu </span>
            from <span className="purple"> Navi Mumbai, India.</span>
            <br />
            I am currently employed as an AI/ML intern at Abstrabit Technologies.
            <br />
            I am pursuing Bachelors of Technology Degree from Vellore Institute of Technology.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to music
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Start with something simple and small, then expand over time"{" "}
          </p>
          <footer className="blockquote-footer">Neelmani</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
