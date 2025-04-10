import React from "react";
import { Link } from "react-router-dom";
import {
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoJavascript,
  IoLogoReact,
  IoLogoFirebase,
} from "react-icons/io5";
import { SiTypescript, SiTailwindcss } from "react-icons/si";

import Img from "../../assets/controle-financeiro.png";

export default function PostProject({ doc }) {
  console.log(Img);
  return (
    <>
      <Link to={doc.url} target="_blank">
        <div
          className="img-projeto"
          style={{ backgroundImage: `url(${doc.img})` }}
        ></div>
      </Link>

      <div className="info">
        <span className="titulo">{doc.name}</span>
        <div className="icons">
          {/* Ícones dinâmicos baseados no conteúdo de doc.front */}
          {doc.front?.includes("Html5") && <IoLogoHtml5 />}
          {doc.front?.includes("Css3") && <IoLogoCss3 />}
          {doc.front?.includes("JavaScript") && <IoLogoJavascript />}
          {doc.front?.includes("React.js") && <IoLogoReact />}
          {doc.front?.includes("Typescript") && <SiTypescript />}
          {doc.front?.includes("Tailwind CSS") && <SiTailwindcss />}
          {doc.back?.includes("FireBase") && <IoLogoFirebase />}
        </div>
      </div>
    </>
  );
}
