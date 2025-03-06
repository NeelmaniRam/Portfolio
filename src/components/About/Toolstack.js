import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiDocker,
  SiAmazonaws,
  SiGooglecloud,
  SiPython,
  SiPytorch,
  SiTensorflow,
  SiScikitlearn,
  SiJavascript,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {[
        { icon: <SiMacos />, name: "macOS" },
        { icon: <SiVisualstudiocode />, name: "VS Code" },
        { icon: <SiPostman />, name: "Postman" },
        { icon: <SiSlack />, name: "Slack" },
        { icon: <SiVercel />, name: "Vercel" },
        { icon: <SiDocker />, name: "Docker" },
        { icon: <SiAmazonaws />, name: "AWS" },
        { icon: <SiGooglecloud />, name: "Google Cloud" },
        { icon: <SiPython />, name: "Python" },
        { icon: <SiPytorch />, name: "PyTorch" },
        { icon: <SiTensorflow />, name: "TensorFlow" },
        { icon: <SiScikitlearn />, name: "Scikit-Learn" },
        { icon: <SiJavascript />, name: "JavaScript" },
      ].map((tool, index) => (
        <Col key={index} xs={4} md={2} className="tech-icons text-center">
          {tool.icon}
          <div style={{ marginTop: "10px", fontSize: "14px" }}>{tool.name}</div>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
