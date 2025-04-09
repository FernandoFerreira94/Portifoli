import React, { useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";

import { Db } from "../../DataBase";
import "./projeto.css";
import Title from "../Title";
import Modal from "../Modal";
import Tecnologia from "../Tecnologia";

import imgAppChamado from "../../assets/app-chamaods1.png";
import imgMataMosca from "../../assets/mata-mosca.png";
import imgPrime from "../../assets/prime-flix.png";
import imgBondai from "../../assets/bondai.png";
import imgControleFinanceiro from "../../assets/controle-financeiro.png";
import imgFinas from "../../assets/financas.png";
import imgCity from "../../assets/noticia-city.png";
import imgSpotify from "../../assets/spotfy.png";
import imgAppMedicao from "../../assets/appmedicaoLogin.png";
import imgCoins from "../../assets/coinsDev.png";
import imgRede from "../../assets/redeSocial.png";
import PostProject from "../PostProject";

export default function Projeto() {
  const [modalData, setModalData] = useState(null);
  const [main, setMain] = useState([]);
  const [secundary, setSecundary] = useState([]);

  useEffect(() => {
    getPost();
  }, []);

  async function getPost() {
    getMain();
    getSecundary();
  }

  // GET POST PROJETO PRINCIPAIS
  async function getMain() {
    const docRef = collection(Db, "project main");

    await getDocs(docRef)
      .then((snapshot) => {
        let listaMain = [];
        snapshot.forEach((doc) => {
          listaMain.push({
            name: doc.data()?.name,
            front: doc.data()["Front-end"],
            back: doc.data()["Back-end"],
            description: doc.data()?.description,
            url: doc.data()?.url,
            functionality: doc.data()?.functionality,
            img: doc.data()?.img,
          });
        });

        setMain(listaMain);
        console.log(listaMain);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // GET POST PROJETOS SEGUNDARIOS
  async function getSecundary() {
    const docRef = collection(Db, "project secundary");

    await getDocs(docRef)
      .then((snapshot) => {
        let listaSecundary = [];
        snapshot.forEach((doc) => {
          listaSecundary.push({
            name: doc.data().name,
            front: doc.data()["Front-end"],
            back: doc.data()["Back-end"],
            description: doc.data().description,
            url: doc.data().url,
            functionality: doc.data().functionality,
          });
        });

        setSecundary(listaSecundary);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      {!modalData && (
        <>
          <Tecnologia />
          <Title titulo="Projeto" />

          <h3 className="h3">Destaques:</h3>

          <div className="container-projeto">
            {main.map((doc, index) => (
              <div className="projeto" key={index}>
                <PostProject index={index} doc={doc} />
              </div>
            ))}
          </div>

          <h3 className="h3">Todos projetos:</h3>
          <div className="container-projeto">
            {secundary.map((doc, index) => (
              <div key={index}>
                <PostProject index={index} doc={doc} />
              </div>
            ))}
          </div>
        </>
      )}
      {modalData && <Modal close={() => setModalData("")} q={modalData} />}
    </>
  );
}
