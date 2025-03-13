import Title from "../Title";

import { IoLogoReact, IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";

export default function Sobre() {
  return (
    <>
      <Title titulo="Sobre mim" />
      <div className="container">
        <p>
          📅 <strong>Idade:</strong> 30 anos. <br />
          🏠 <strong>Residência:</strong> São José dos Campos, SP. <br />
          🎓<strong> Educação:</strong> Atualmente estou cursando Análise
          Desenvolvimento de Sistemas na UNIP (Universidade Paulista), 5º
          semestre. Estudo inglês há 2 anos (ainda não sou fluente, mas já
          consigo pedir pizza sem problemas). <br />
          📚 <strong> Formação: </strong> Desenvolvedor Front-end com
          especialização em , React.js{" "}
          <span className="iconSobre">
            {" "}
            <IoLogoReact size={20} />{" "}
          </span>
          e TypeScript
          <span className="iconSobre">
            {" "}
            <SiTypescript size={20} />{" "}
          </span>
          . <br /> 💻
          <strong> Profissão:</strong> : Atualmente atuando como Desenvolvedor
          Front-End, lidando com aplicações web em React.js (sempre em busca do
          código perfeito, mas aceitando que bugs fazem parte da vida). <br />
          🛠️ <strong>Habilidades:</strong> Conhecimento sólido em HTML, CSS,
          JavaScript, React.js, TypeScript, SASS, Bootstrap, Git, JQuery e
          MySQL. (Meu cinto de utilidades está sempre preparado para qualquer
          desafio!) <br />
          🔮<strong> Futuro:</strong> Busco ingressar no mundo do
          desenvolvimento de aplicações mobile. Porque não adicionar mais uma
          camada de complexidade à vida? rs
        </p>
      </div>
    </>
  );
}
