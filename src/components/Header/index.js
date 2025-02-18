import React from "react";
import { IoIosContact } from "react-icons/io";
import { ImProfile } from "react-icons/im";
import { LiaInternetExplorer } from "react-icons/lia";
import { IoCloudDownload } from "react-icons/io5";

import "./header.css";
import AvatartImg from "../../assets/perfil.jpg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="sidebar">
      <div>
        <img src={AvatartImg} alt="" />
      </div>

      <Link>
        {" "}
        <ImProfile size={25} />
        Sobre mim
      </Link>
      <Link>
        {" "}
        <LiaInternetExplorer size={25} /> Projetos
      </Link>
      <Link>
        {" "}
        <IoIosContact size={25} />
        Contato
      </Link>
      <Link>
        <IoCloudDownload size={25} />
        Download Cv
      </Link>
    </div>
  );
}
