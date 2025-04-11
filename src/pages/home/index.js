import React, { useState } from "react";

import "./home.css";
import Header from "../../components/Header";
import Projeto from "../../components/Projeto";
import Sobre from "../../components/Sobre";
import Title from "../../components/Title";
import Contato from "../../components/Contato";
import TypingEffect from "../../components/TypingEffect";

export default function Home() {
  const [showSobre, setShowSobre] = useState(true);
  const [showPro, setShowPro] = useState(false);
  const [showContato, setShowContato] = useState(false);

  function handleSobre() {
    setShowPro(false);
    setShowContato(false);
    setShowSobre(true);
  }
  function handleShowProjeto() {
    setShowPro(true);
    setShowSobre(false);
    setShowContato(false);
  }

  function handleContato() {
    setShowPro(false);
    setShowSobre(false);
    setShowContato(true);
  }

  return (
    <>
      <div className="fixed-background"></div>

      <Header
        sobre={handleSobre}
        projeto={handleShowProjeto}
        contato={handleContato}
      />

      <div className="content home">
        {showSobre && (
          <>
            <Title titulo="Seja Bem-Vindo" />
            <div className="container sobre">
              <h2>Olá eu sou o Fernando Pedro.</h2>
              <span>
                Desenvolvedor Frontend <TypingEffect text="React.js" />
              </span>
            </div>
            <Sobre />
          </>
        )}

        {showPro && <Projeto />}

        {showContato && <Contato />}
      </div>
    </>
  );
}
