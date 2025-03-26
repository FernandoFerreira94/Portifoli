import React, { useState } from "react";
import {
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoJavascript,
  IoLogoReact,
  IoLogoFirebase,
} from "react-icons/io5";
import { Link } from "react-router-dom";
import { info } from "../Modal/infro";

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

export default function Projeto() {
  const [modalData, setModalData] = useState(null);

  function handleShow(projectKey) {
    setModalData(info[projectKey]);
    console.log(info[projectKey]);
  }
  return (
    <>
      {!modalData && (
        <>
          <Tecnologia />
          <Title titulo="Projeto" />

          <h3 className="h3">Destaques:</h3>

          <div className="container-projeto">
            <div className="projeto">
              <Link to={info.appMedicao.site} target="blank">
                <div
                  className="img"
                  style={{ backgroundImage: `url(${imgAppMedicao})` }}
                ></div>
              </Link>
              <div className="info">
                <span className="titulo">{info.appMedicao.nome}</span>
                <div className="icons">
                  <IoLogoHtml5 size={15} color="#9370DB" />
                  <IoLogoCss3 size={15} color="#9370DB" />
                  <IoLogoJavascript size={15} color="#9370DB" />
                  <IoLogoReact size={15} color="#9370DB" />
                  <IoLogoFirebase size={15} color="#9370DB" />
                </div>
                <button
                  className="btn-info"
                  onClick={() => handleShow("appMedicao")}
                >
                  Mais informaçoes
                </button>
              </div>
            </div>

            <div className="projeto">
              <Link to={info.mataMosca.site} target="blank">
                <div
                  className="img"
                  style={{
                    backgroundImage: `url(${imgMataMosca})`,
                  }}
                ></div>
              </Link>
              <div className="info">
                <span className="titulo">{info.mataMosca.nome}</span>
                <div className="icons">
                  <IoLogoHtml5 size={15} color="#9370DB" />
                  <IoLogoCss3 size={15} color="#9370DB" />
                  <IoLogoJavascript size={15} color="#9370DB" />
                </div>
                <button
                  className="btn-info"
                  onClick={() => handleShow("mataMosca")}
                >
                  Mais informaçoes
                </button>
              </div>
            </div>

            <div className="projeto">
              <Link to={info.appChamado.site} target="blank">
                <div
                  className="img"
                  style={{
                    backgroundImage: `url(${imgAppChamado})`,
                    backgroundPosition: "0",
                  }}
                ></div>
              </Link>
              <div className="info">
                <span className="titulo">{info.appChamado.nome}</span>
                <div className="icons">
                  <IoLogoHtml5 size={15} color="#9370DB" />
                  <IoLogoCss3 size={15} color="#9370DB" />
                  <IoLogoJavascript size={15} color="#9370DB" />
                  <IoLogoReact size={15} color="#9370DB" />
                  <IoLogoFirebase size={15} color="#9370DB" />
                </div>
                <button
                  className="btn-info"
                  onClick={() => handleShow("appChamado")}
                >
                  Mais informaçoes
                </button>
              </div>
            </div>
          </div>

          <h3 className="h3">Todos projetos:</h3>

          <div className="container-projeto">
            <div className="projeto">
              <Link to={info.coinsDev.site} target="blank">
                <div
                  className="img"
                  style={{
                    backgroundImage: `url(${imgCoins})`,
                  }}
                ></div>
              </Link>
              <div className="info">
                <span className="titulo">{info.coinsDev.nome}</span>
                <div className="icons">
                  <IoLogoHtml5 size={15} color="#9370DB" />
                  <IoLogoCss3 size={15} color="#9370DB" />
                  <IoLogoJavascript size={15} color="#9370DB" />
                  <IoLogoReact size={15} color="#9370DB" />
                </div>
                <button
                  className="btn-info"
                  onClick={() => handleShow("coinsDev")}
                >
                  Mais informaçoes
                </button>
              </div>
            </div>

            <div className="projeto">
              <Link to={info.primeFlix.site} target="blank">
                <div
                  className="img"
                  style={{ backgroundImage: `url(${imgPrime})` }}
                ></div>
              </Link>
              <div className="info">
                <span className="titulo">{info.primeFlix.nome}</span>
                <div className="icons">
                  <IoLogoHtml5 size={15} color="#9370DB" />
                  <IoLogoCss3 size={15} color="#9370DB" />
                  <IoLogoJavascript size={15} color="#9370DB" />
                  <IoLogoReact size={15} color="#9370DB" />
                  <IoLogoFirebase size={15} color="#9370DB" />
                </div>
                <button
                  className="btn-info"
                  onClick={() => handleShow("primeFlix")}
                >
                  Mais informaçoes
                </button>
              </div>
            </div>

            {""}
            {""}
            {""}

            <div className="projeto">
              <Link to={info.spotify.site} target="blank">
                <div
                  className="img"
                  style={{
                    backgroundImage: `url(${imgSpotify})`,
                  }}
                ></div>
              </Link>
              <div className="info">
                <span className="titulo">{info.spotify.nome}</span>
                <div className="icons">
                  <IoLogoHtml5 size={15} color="#9370DB" />
                  <IoLogoCss3 size={15} color="#9370DB" />
                  <IoLogoJavascript size={15} color="#9370DB" />
                </div>
                <button
                  className="btn-info"
                  onClick={() => handleShow("spotify")}
                >
                  Mais informaçoes
                </button>
              </div>
            </div>

            {""}
            {""}
            {""}
          </div>

          <div className="container-projeto">
            <div className="projeto">
              <Link to={info.finacas.site} target="blank">
                <div
                  className="img"
                  style={{ backgroundImage: `url(${imgControleFinanceiro})` }}
                ></div>
              </Link>
              <div className="info">
                <span className="titulo">{info.finacas.nome}</span>
                <div className="icons">
                  <IoLogoHtml5 size={15} color="#9370DB" />
                  <IoLogoCss3 size={15} color="#9370DB" />
                  <IoLogoJavascript size={15} color="#9370DB" />
                </div>
                <button
                  className="btn-info"
                  onClick={() => handleShow("finacas")}
                >
                  Mais informaçoes
                </button>
              </div>
            </div>

            <div className="projeto">
              <Link to={info.finas.site} target="blank">
                <div
                  className="img"
                  style={{
                    backgroundImage: `url(${imgFinas})`,
                  }}
                ></div>
              </Link>
              <div className="info">
                <span className="titulo">{info.finas.nome}</span>
                <div className="icons">
                  <IoLogoHtml5 size={15} color="#9370DB" />
                  <IoLogoCss3 size={15} color="#9370DB" />
                  <IoLogoJavascript size={15} color="#9370DB" />
                </div>
                <button
                  className="btn-info"
                  onClick={() => handleShow("finas")}
                >
                  Mais informaçoes
                </button>
              </div>
            </div>

            {""}
            {""}
            {""}

            <div className="projeto">
              <Link to={info.city.site} target="blank">
                <div
                  className="img"
                  style={{
                    backgroundImage: `url(${imgCity})`,
                  }}
                ></div>
              </Link>
              <div className="info">
                <span className="titulo">{info.city.nome}</span>
                <div className="icons">
                  <IoLogoHtml5 size={15} color="#9370DB" />
                  <IoLogoCss3 size={15} color="#9370DB" />
                  <IoLogoJavascript size={15} color="#9370DB" />
                </div>
                <button className="btn-info" onClick={() => handleShow("city")}>
                  Mais informaçoes
                </button>
              </div>
            </div>

            {""}
            {""}
            {""}
          </div>
          <div className="container-projeto">
            <div className="projeto">
              <Link to={info.bondai.site} target="blank">
                <div
                  className="img"
                  style={{
                    backgroundImage: `url(${imgBondai})`,
                  }}
                ></div>
              </Link>
              <div className="info">
                <span className="titulo">{info.bondai.nome}</span>
                <div className="icons">
                  <IoLogoHtml5 size={15} color="#9370DB" />
                  <IoLogoCss3 size={15} color="#9370DB" />
                  <IoLogoJavascript size={15} color="#9370DB" />
                </div>
                <button
                  className="btn-info"
                  onClick={() => handleShow("bondai")}
                >
                  Mais informaçoes
                </button>
              </div>
            </div>
          </div>
        </>
      )}
      {modalData && <Modal close={() => setModalData("")} q={modalData} />}
    </>
  );
}
