import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Olá! Eu sou <span className="purple">Gustavo Sorrilha Sanches</span> de São Paulo, Brasil.
            <br />
            Sou desenvolvedor de software, formado em Análise e Desenvolvimento de Sistemas.
            <br />
            Busco sempre criar soluções eficientes e escaláveis.  
            <br />
            <br />
            Além da programação, gosto de:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Ler livros
            </li>
            <li className="about-activity">
              <ImPointRight /> Jogar RPG 
            </li>
            <li className="about-activity">
              <ImPointRight /> Viajar
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Oportunidades não surgem. É você que as cria."{" "}
          </p>
          <footer className="blockquote-footer">Chris Grosser</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
