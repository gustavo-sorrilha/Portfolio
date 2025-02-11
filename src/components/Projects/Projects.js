import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/Group 4 (3).png";
import coming from "../../Assets/Projects/coming.jpg";
import editor from "../../Assets/Projects/Group 4 (2).png";
import buy from "../../Assets/Projects/Group 4.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/Group 4 (1).png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Meus <strong className="purple">projetos </strong> recentes
        </h1>
        <p style={{ color: "white" }}>
          Aqui estão alguns projetos em que trabalhei recentemente.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={buy}
              isBlog={false}
              title="Buy.it"
              description="Solução para automatizar e otimizar processos de compras empresariais, reduzindo custos e melhorando a comunicação com fornecedores. Usando inteligência artificial, a plataforma oferece tomada de decisões mais ágil e eficiente, promovendo sustentabilidade e competitividade."
              ghLink="https://github.com/gustavo-sorrilha/Buy.it"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Alimente+"
              description="Projeto Alimente+ desenvolvido com Java para o back-end, React para o front-end e banco de dados SQL, focado em combater a fome de maneira sustentável. Facilita a doação de alimentos próximos da data de validade e o reaproveitamento de sobras de restaurantes, com ênfase na redução do desperdício e na distribuição eficiente para comunidades carentes."
              ghLink="https://github.com/gustavo-sorrilha/Alimente-/tree/main"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="HealthHear"
              description="HealthHear é um app desenvolvido com Java Spring, React Native e TypeScript, focado em promover a transparência na saúde. Permite que usuários registrem feedbacks e denúncias sobre médicos, com possibilidade de resposta dos profissionais, incentivando mais segurança e confiança na jornada dos pacientes."
              ghLink="https://github.com/gustavo-sorrilha/HealthHear"
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="StockWave"
              description="Projeto desenvolvido com Java, Python, React.js e Oracle para facilitar o entendimento sobre IPOs (Ofertas Públicas Iniciais). Oferece um curso interativo com certificação e bonificações, ajudando a disseminar a cultura de investimentos no Brasil e tornar o mercado financeiro mais acessível."
              ghLink="https://github.com/gustavo-sorrilha/StockWave"
              demoLink="https://stockwave-challenge.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={coming}
              isBlog={false}
              title=""
              description=""
              ghLink=""
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={coming}
              isBlog={false}
              title=""
              description=""
              ghLink=""
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
