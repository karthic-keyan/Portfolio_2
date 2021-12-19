import React from "react";
import { Col, Row, Tooltip, OverlayTrigger } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiAndroid,
  DiJava
} from "react-icons/di";
import './cards.css'
import { SiPytorch, SiTensorflow, SiFirebase, SiGraphql, SiRedux } from "react-icons/si";

function Techstack() {
  return (
    <>
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>  
      <Col xs={4} md={2} className="bg">
      <div class="overlay">
      <p>C++</p>
    </div>
    <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="bg">
        <DiJavascript1 />
        <div class="overlay">
      <p>Javascript</p>
    </div>
      </Col>
      <Col xs={4} md={2} className="bg">
        <DiNodejs />
        <div class="overlay">
      <p>Node</p>
    </div>
      </Col>
      <Col xs={4} md={2} className="bg">
        <DiReact />
        <div class="overlay">
      <p>React Js</p>
    </div>
      </Col>
      <Col xs={4} md={2} className="bg">
        <DiMongodb />
        <div class="overlay">
      <p>Mongo db</p>
    </div>
      </Col>
      <Col xs={4} md={2} className="bg">
        <SiFirebase />
        <div class="overlay">
      <p>Firebase</p>
    </div>
      </Col>
      <Col xs={4} md={2} className="bg">
        <SiGraphql />
        <div class="overlay">
      <p>Graphql</p>
    </div>
      </Col>
      <Col xs={4} md={2} className="bg">
        <DiAndroid />
        <div class="overlay">
      <p>Android</p>
    </div>
      </Col>
      <Col xs={4} md={2} className="bg">
        <DiJava />
        <div class="overlay">
      <p>Java</p>
    </div>
      </Col>
      <Col xs={4} md={2} className="bg">
        <SiRedux />
        <div class="overlay">
      <p>React-Redux</p>
    </div>
      </Col>
    </Row>
    </>
  );
}

export default Techstack;
