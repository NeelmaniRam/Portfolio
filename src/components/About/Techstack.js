import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import { SiMysql, SiHtml5, SiCss3, SiExpress, SiOpenai } from "react-icons/si";

const techStack = [
  { icon: <DiPython />, name: "Python" },
  { icon: <DiJava />, name: "Java" },
  { icon: <CgCPlusPlus />, name: "C++" },
  { icon: <SiMysql />, name: "SQL" },
  { icon: <SiOpenai />, name: "LLM" },
  { icon: <SiHtml5 />, name: "HTML" },
  { icon: <SiCss3 />, name: "CSS" },
  { icon: <DiJavascript1 />, name: "JavaScript" },
  { icon: <DiReact />, name: "React" },
  { icon: <DiNodejs />, name: "Node.js" },
  { icon: <SiExpress />, name: "Express.js" },
  { icon: <DiMongodb />, name: "MongoDB" },
  { icon: <DiGit />, name: "Git" },
];

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techStack.map((tech, index) => (
        <Col key={index} xs={4} md={2} className="tech-icons text-center">
          {tech.icon}
          <p style={{ marginTop: "10px" , fontSize: "14px"}}>{tech.name}</p>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
