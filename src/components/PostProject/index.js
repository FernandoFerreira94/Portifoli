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

import Img from "../../assets/devShop.png";

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
          {doc.frontend?.includes("Html5") && <IoLogoHtml5 />}
          {doc.frontend?.includes("Css3") && <IoLogoCss3 />}
          {doc.frontend?.includes("JavaScript") && <IoLogoJavascript />}
          {doc.frontend?.includes("React.js") && <IoLogoReact />}
          {doc.frontend?.includes("Typescript") && <SiTypescript />}
          {doc.frontend?.includes("Tailwind CSS") && <SiTailwindcss />}
          {doc.backend?.includes("FireBase") && <IoLogoFirebase />}
        </div>
      </div>
    </>
  );
}
