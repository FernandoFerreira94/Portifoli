import React from "react";
import { IoIosContact } from "react-icons/io";
import { ImProfile } from "react-icons/im";
import { LiaInternetExplorer } from "react-icons/lia";
import { IoCloudDownload } from "react-icons/io5";
import curriculo from "../Header/curriculo.pdf";

import "./header.css";
import AvatartImg from "../../assets/perfil.jpg";
import { Link } from "react-router-dom";

export default function Header({ sobre, projeto, contato }) {
  return (
    <div className="sidebar">
      <div>
        <img src={AvatartImg} alt="Perfil" />
      </div>

      <Link onClick={sobre}>
        <ImProfile size={25} />
        Sobre mim
      </Link>
      <Link onClick={projeto}>
        <LiaInternetExplorer size={25} /> Projetos
      </Link>
      <Link onClick={contato}>
        <IoIosContact size={25} />
        Contato
      </Link>
      <a href={curriculo} download>
        <IoCloudDownload size={25} />
        Download Cv
      </a>
    </div>
  );
}
