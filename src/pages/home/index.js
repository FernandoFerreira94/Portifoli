import React from "react";
import { useNavigate } from "react-router-dom";

import "./home.css";
import Header from "../../components/Header";
import Projeto from "../../components/Projeto";
import Tecnologia from "../../components/Tecnologia";
import Sobre from "../../components/Sobre";
import Title from "../../components/Title";
import Contato from "../../components/Contato";

export default function Home() {
  const navigate = useNavigate();

  function handleNavegate(web) {
    return navigate(web);
  }
  return (
    <>
      <Header />
      <div className="content home">
        <Title titulo="Seja Bem-Vindo" />
        <div className="container">
          <h2>Olá eu sou o Fernando Pedro.</h2>
          <span>Desenvolvedor Frontend</span>
        </div>
        <Sobre />

        <Tecnologia />
        <Projeto />
        <Contato />
      </div>
    </>
  );
}
