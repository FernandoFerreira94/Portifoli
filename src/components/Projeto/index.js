import React, { useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";

import { Db } from "../../DataBase";
import "./projeto.css";
import Title from "../Title";
import Modal from "../Modal";
import Tecnologia from "../Tecnologia";
import PostProject from "../PostProject";

import ImgAyumiNails from "../../assets/ayumiNails.png";
import ImgAppChamado from "../../assets/app-chamaods1.png";
import ImgColinasMedicao from "../../assets/appmedicaoLogin.png";
import ImgCoinsDev from "../../assets/coinsDev.png";
import ImgRedeSocial from "../../assets/redeSocial.png";
import ImgMataMosca from "../../assets/mata-mosca.png";
import ImgPrimaFlix from "../../assets/prime-flix.png";
import ImgBondai from "../../assets/bondai.png";
import ImgSpotify from "../../assets/spotfy.png";
import ImgControleFincas from "../../assets/controle-financeiro.png";
import ImgFinas from "../../assets/financas.png";
import ImgNoticia from "../../assets/noticia-city.png";

export default function Projeto() {
  const [modalData, setModalData] = useState(null); // Dados do projeto no modal
  const [main, setMain] = useState([]); // Projetos principais
  const [secundary, setSecundary] = useState([]); // Projetos secundários

  useEffect(() => {
    const getPost = async () => {
      try {
        const [mainProjects, secundaryProjects] = await Promise.all([
          fetchMainProjects(),
          fetchSecundaryProjects(),
        ]);
        setMain(mainProjects);
        setSecundary(secundaryProjects);
      } catch (error) {
        console.error("Erro ao buscar os projetos:", error);
      }
    };

    getPost();
  }, []);

  // Função para buscar projetos principais
  const fetchMainProjects = async () => {
    const docRef = collection(Db, "project main");
    const snapshot = await getDocs(docRef);

    // Ordena projetos principais por nomes específicos e aleatórios
    const projects = snapshot.docs.map((doc) => doc.data());
    const orderedProjects = [
      ...["Ayumi Nails", "Colinas Medição", "App chamado"].map((name) =>
        projects.find((project) => project.name === name)
      ),
      ...projects.filter(
        (project) =>
          !["Ayumi Nails", "Colinas Medição", "App chamado"].includes(
            project.name
          )
      ),
    ];

    return orderedProjects;
  };

  // Função para buscar projetos secundários
  const fetchSecundaryProjects = async () => {
    const docRef = collection(Db, "project secundary");
    const snapshot = await getDocs(docRef);

    // Ordena projetos secundários por nomes específicos e aleatórios
    const projects = snapshot.docs.map((doc) => doc.data());
    const orderedProjects = [
      ...["Coins Dev", "Rede Social", "Mata Mosca", "Prime Flix"].map((name) =>
        projects.find((project) => project.name === name)
      ),
      ...projects.filter(
        (project) =>
          !["Coins Dev", "Rede Social", "Mata Mosca", "Prime Flix"].includes(
            project.name
          )
      ),
    ];

    return orderedProjects;
  };

  // Função para abrir o modal
  const openModal = (doc) => {
    setModalData(doc);
  };

  // Função para fechar o modal
  const closeModal = () => {
    setModalData(null);
  };

  return (
    <>
      {!modalData ? (
        <>
          <Tecnologia />
          <Title titulo="Projeto" />

          {/* Destaques */}
          <h3 className="h3">Destaques:</h3>
          <div className="container-projeto">
            {main.map(
              (doc, index) =>
                doc && (
                  <div className="projeto" key={index}>
                    <PostProject index={index} doc={doc} />
                    <button className="btn-info" onClick={() => openModal(doc)}>
                      Mais informações
                    </button>
                  </div>
                )
            )}
          </div>

          {/* Todos os Projetos */}
          <h3 className="h3">Todos projetos:</h3>
          <div className="container-projeto">
            {secundary.map(
              (doc, index) =>
                doc && (
                  <div className="projeto" key={index}>
                    <PostProject index={index} doc={doc} />
                    <button className="btn-info" onClick={() => openModal(doc)}>
                      Mais informações
                    </button>
                  </div>
                )
            )}
          </div>
        </>
      ) : (
        <Modal doc={modalData} close={closeModal} />
      )}
    </>
  );
}
