import { useNavigate } from "react-router-dom";
import {
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoJavascript,
  IoLogoReact,
  IoLogoSass,
  IoLogoFirebase,
} from "react-icons/io5";

import "./projeto.css";
import Title from "../Title";

export default function Projeto() {
  return (
    <>
      <Title titulo="Projeto" />
      <div className="projeto">
        <h3>Destaques:</h3>
        <div className="img-projeto">
          <div className="pro img1">
            <a
              href="https://app-chamados-23.netlify.app/"
              target="_blank"
              className="link"
            >
              <span> App Chamados</span>
              <div className="icon-pro">
                <IoLogoHtml5 size={15} color="#9370DB" />
                <IoLogoCss3 size={15} color="#9370DB" />
                <IoLogoReact size={15} color="#9370DB" />
                <IoLogoJavascript size={15} color="#9370DB" />
                <IoLogoFirebase size={15} color="#9370DB" />
              </div>
              <p>
                Aplicativo para cadastro e gestão de chamados de empresas,
                desenvolvido utilizando React.js para o front-end e Firebase
                para o back-end.
              </p>
            </a>
          </div>
          <div className="pro img2">
            <a
              href="https://mata-mosca-23.netlify.app/"
              target="_blank"
              className="link"
            >
              <span>Mata mosca</span>
              <div className="icon-pro">
                <IoLogoHtml5 size={15} color="#9370DB" />
                <IoLogoCss3 size={15} color="#9370DB" />
                <IoLogoJavascript size={15} color="#9370DB" />
              </div>
              <p>
                Um jogo interativo onde os usuários tentam clicar em moscas que
                aparecem na tela é um projeto divertido
              </p>
            </a>
          </div>

          <div className="pro img3">
            <a
              href="https://prime-flix-movie-23.netlify.app/"
              target="_blank"
              className="link"
            >
              <span>Prime flix</span>
              <div className="icon-pro">
                <IoLogoHtml5 size={15} color="#9370DB" />
                <IoLogoCss3 size={15} color="#9370DB" />
                <IoLogoReact size={15} color="#9370DB" />
                <IoLogoJavascript size={15} color="#9370DB" />
              </div>
              <p>
                Um site para a descoberta e visualização de filmes. O site
                proporciona uma interface intuitiva e amigável para os usuários
                explorarem e assistirem a trailers de filmes.
              </p>
            </a>
          </div>
        </div>

        <h3>Todos projetos:</h3>

        <div className="pro-rest">
          <div className="cont rest-1">
            <a href="">
              <span>Finas</span>
              <div>
                <IoLogoHtml5 size={15} color="#9370DB" />
                <IoLogoCss3 size={15} color="#9370DB" />
                <IoLogoJavascript size={15} color="#9370DB" />
              </div>
            </a>
          </div>

          <div className="cont rest-2">
            <a href="">
              <span>Bondai</span>
              <div>
                <IoLogoHtml5 size={15} color="#9370DB" />
                <IoLogoCss3 size={15} color="#9370DB" />
                <IoLogoJavascript size={15} color="#9370DB" />
              </div>
            </a>
          </div>

          <div className="cont rest-3">
            <a href="">
              <span>Cadastro</span>
              <div>
                <IoLogoHtml5 size={15} color="#9370DB" />
                <IoLogoCss3 size={15} color="#9370DB" />
                <IoLogoJavascript size={15} color="#9370DB" />
              </div>
            </a>
          </div>

          <div className="cont rest-4">
            <a href="">
              <span>
                Controle de <br />
                despesas
              </span>
              <div>
                <IoLogoHtml5 size={15} color="#9370DB" />
                <IoLogoCss3 size={15} color="#9370DB" />
                <IoLogoJavascript size={15} color="#9370DB" />
                <IoLogoReact size={15} color="#9370DB" />
              </div>
            </a>
          </div>

          <div className="cont rest-5">
            <a href="">
              <span>Formulario</span>
              <div>
                <IoLogoHtml5 size={15} color="#9370DB" />
                <IoLogoCss3 size={15} color="#9370DB" />
                <IoLogoJavascript size={15} color="#9370DB" />
              </div>
            </a>
          </div>

          <div className="cont rest-6">
            <a href="">
              <span>Noticia city</span>
              <div>
                <IoLogoHtml5 size={15} color="#9370DB" />
                <IoLogoCss3 size={15} color="#9370DB" />
                <IoLogoJavascript size={15} color="#9370DB" />
              </div>
            </a>
          </div>

          <div className="cont rest-7">
            <a href="">
              <span>Clone spotify</span>
              <div>
                <IoLogoHtml5 size={15} color="#9370DB" />
                <IoLogoCss3 size={15} color="#9370DB" />
                <IoLogoJavascript size={15} color="#9370DB" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
