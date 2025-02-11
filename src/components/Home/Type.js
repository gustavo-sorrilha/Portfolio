import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Desenvolvedor de Software",
          "Desenvolvedor Backend",
          "Programador de Banco de Dados e Sistemas",
          "Freelancer",   
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
