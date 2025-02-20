import React, { useState } from "react";

import "./home.css";
import Header from "../../components/Header";
import Projeto from "../../components/Projeto";
import Tecnologia from "../../components/Tecnologia";
import Sobre from "../../components/Sobre";
import Title from "../../components/Title";
import Contato from "../../components/Contato";

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
      <Header
        sobre={handleSobre}
        projeto={handleShowProjeto}
        contato={handleContato}
      />
      <div className="content home">
        {showSobre && (
          <>
            <Title titulo="Seja Bem-Vindo" />
            <div className="container">
              <h2>Olá eu sou o Fernando Pedro.</h2>
              <span>Desenvolvedor Frontend</span>
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
