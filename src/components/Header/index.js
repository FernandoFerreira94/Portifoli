import React, { useState } from "react";
import { IoIosContact } from "react-icons/io";
import { ImProfile } from "react-icons/im";
import { LiaInternetExplorer } from "react-icons/lia";
import { IoCloudDownload } from "react-icons/io5";
import { FaAngleDoubleRight, FaAngleDoubleLeft } from "react-icons/fa";

import curriculo from "../Header/curriculo2025.pdf";

import "./header.css";
import AvatartImg from "../../assets/perfil.png";
import { Link } from "react-router-dom";

export default function Header({ sobre, projeto, contato }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`sidebar ${isExpanded ? "expanded" : "collapsed"}`}>
      <div className="header">
        <img src={AvatartImg} alt="Perfil" className="profile-pic" />
      </div>
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isExpanded ? (
          <FaAngleDoubleLeft size={25} />
        ) : (
          <FaAngleDoubleRight size={25} />
        )}
      </button>
      <nav>
        <Link onClick={sobre}>
          <ImProfile />
          {isExpanded && <span>Sobre mim</span>}
        </Link>
        <Link onClick={projeto}>
          <LiaInternetExplorer />
          {isExpanded && <span>Projetos</span>}
        </Link>
        <Link onClick={contato}>
          <IoIosContact />
          {isExpanded && <span>Contato</span>}
        </Link>
        <a href={curriculo} download>
          <IoCloudDownload />
          {isExpanded && <span>Download CV</span>}
        </a>
      </nav>
    </div>
  );
}
