import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineMail,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
            DEIXE-ME <span className="purple"> APRESENTAR </span>
            </h1>
            <p className="home-about-body">
              Me apaixonei pela programação e, desde então, tenho aprendido e me desafiado constantemente. 🤷‍♂️
              <br />
              <br />
              Sou fluente em tecnologias como
              <i>
                <b className="purple"> Python, Java, Spring Boot </b>
              </i>
              <br />
              <br />
              Meu campo de interesse está em criar novas <i>
                <b className="purple">tecnologias e produtos</b>
              </i>, principalmente no desenvolvimento de soluções robustas de <i>
                <b className="purple">backend</b>
              </i> e também em áreas relacionadas à <b className="purple">segurança de dados</b>.
              <br />
              <br />
              Sempre que possível, também aplico minha paixão por desenvolver soluções com <b className="purple">tecnologias modernas</b> como <i>
                <b className="purple">React.js</b>
              </i> e <i>
                <b className="purple">bancos de dados SQL</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
          <h1>ME ENCONTRE EM</h1>
          <p>
            Fique à vontade para <span className="purple">conectar</span> comigo
          </p>

            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/gustavo-sorrilha"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:gustavosorri29@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/gustavo-sorrilha-sanches/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/g_sanches0/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
