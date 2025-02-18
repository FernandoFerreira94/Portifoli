import {
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoJavascript,
  IoLogoReact,
  IoLogoSass,
} from "react-icons/io5";

import Title from "../Title";

import { SiTypescript, SiBootstrap } from "react-icons/si";

export default function Tecnologia() {
  return (
    <>
      <Title titulo="Tecnologia" />
      <div className="cards">
        <div>
          <IoLogoHtml5 size={30} color="#9370DB" /> HTML5
        </div>
        <div>
          <IoLogoCss3 size={30} color="#9370DB" /> CSS{" "}
        </div>
        <div>
          <IoLogoJavascript size={30} color="#9370DB" /> JavaScript
        </div>
        <div>
          <IoLogoReact size={30} color="#9370DB" /> React.js
        </div>
        <div>
          <SiTypescript size={30} color="#9370DB" /> TypeScript
        </div>
        <div>
          <IoLogoSass size={30} color="#9370DB" /> SASS
        </div>
        <div>
          <SiBootstrap size={30} color="#9370DB" /> BootStrap
        </div>
      </div>
    </>
  );
}
