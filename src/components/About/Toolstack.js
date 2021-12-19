import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiJupyter,
  SiPostman,
  SiHeroku,
  SiJira,
  SiGithub,
  SiAndroidstudio,
  SiAdobexd
} from "react-icons/si";
import './cards.css'
function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="bg">
        <SiVisualstudiocode />
        <div class="overlay">
          <p>VS Code</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="bg">
        <SiAdobexd />
        <div class="overlay">
          <p>Adobe xd</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="bg">
        <SiGithub />
        <div class="overlay">
          <p>Github</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="bg">
        <SiPostman />
        <div class="overlay">
          <p>Postman</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="bg">
        <SiAndroidstudio />
        <div class="overlay">
          <p>Android Studio</p>
        </div>
      </Col>
    </Row>
  );
}

export default Toolstack;
