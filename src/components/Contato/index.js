import Title from "../Title";
import "./contato.css";
import {
  IoLogoLinkedin,
  IoLogoGithub,
  IoLogoWhatsapp,
  IoLogoInstagram,
} from "react-icons/io5";
import { SiThreads } from "react-icons/si";
import { SiGmail } from "react-icons/si";
import { IoLogoFacebook } from "react-icons/io";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function Contato() {
  function handleModal(text) {
    toast.info(text);
  }

  return (
    <>
      <Title titulo="Contato" />
      <div className="container">
        <div className="contato">
          <Link
            style={{ color: "rgb(0,114,177)" }}
            to="https://www.linkedin.com/in/fernando-ferreira-78927b203"
            target="blank"
          >
            <div className="icon">
              <IoLogoLinkedin size={70} />
            </div>
          </Link>

          <Link
            className="git"
            to="https://github.com/FernandoFerreira94"
            target="blank"
          >
            <div className="icon">
              <IoLogoGithub size={70} />
            </div>
          </Link>

          <Link
            className="gmail"
            onClick={() => handleModal("fernandoeqp59@gmail.com")}
          >
            <div className="icon">
              <SiGmail size={70} />
            </div>
          </Link>

          <Link className="what" target="_blank" to="https://wa.me/12997041551">
            <div className="icon">
              <IoLogoWhatsapp size={70} />
            </div>
          </Link>

          <Link
            className="insta"
            to="https://www.instagram.com/fernando.ferreira._/"
            target="blank"
          >
            <div className="icon">
              <IoLogoInstagram size={70} />
            </div>
          </Link>

          <Link
            className="thread"
            to="https://www.threads.net/@fernando.ferreira._?xmt=AQGz24-pV5kbIyLqWlo8gj7jQGNvZBQqHVKifreUr5TrgzQ"
            target="blank"
          >
            <div className="icon">
              <SiThreads size={70} />
            </div>
          </Link>

          <Link
            className="face"
            to="https://www.facebook.com/fernando.ferreira.988926?locale=pt_BR"
            target="blank"
          >
            <div className="icon">
              <IoLogoFacebook size={70} />
            </div>
          </Link>
        </div>
      </div>
      <div className="container content">
        <p>
          👋 <br /> Se você está procurando por um desenvolvedor que não apenas
          escreve código, mas também adiciona uma pitada de charme e diversão ao
          ambiente de trabalho, então você encontrou a pessoa certa! <br />
          Meu amor por desenvolver soluções criativas é tão grande quanto minha
          habilidade de contar piadas ruins. (Prometo que meu código é muito
          melhor que minhas piadas! 😅). <br /> E acredito que um bom
          desenvolvedor é como um bom café: forte, confiável e impossível de
          ignorar. <br /> Gostaria de convidá-lo para uma conversa descontraída
          para discutirmos como minhas habilidades e energia positiva podem
          contribuir para o seu time. Mal posso esperar para compartilhar
          ideias, criar soluções incríveis e, claro, trabalhar junto com você!
          Até breve!
        </p>
      </div>
    </>
  );
}
