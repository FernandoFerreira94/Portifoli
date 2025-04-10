import {
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoJavascript,
  IoLogoReact,
  IoLogoSass,
} from "react-icons/io5";

import Title from "../Title";

import { SiTypescript, SiTailwindcss, SiBootstrap } from "react-icons/si";

export default function Tecnologia() {
  return (
    <>
      <Title titulo="Skill" />
      <div className="cards">
        <div>
          <IoLogoHtml5 /> <span> HTML5 </span>
        </div>

        <div>
          <IoLogoCss3 /> <span>CSS </span>
        </div>
        <div>
          <IoLogoJavascript /> <span> JavaScript</span>
        </div>
        <div>
          <IoLogoReact /> <span> React.js</span>
        </div>
        <div>
          <SiTypescript /> <span> TypeScript</span>
        </div>
        <div>
          <IoLogoSass /> <span> SASS</span>
        </div>
        <div>
          <SiBootstrap /> <span> BootStrap</span>
        </div>
        <div>
          <SiTailwindcss /> <span> TailWind</span>
        </div>
      </div>
    </>
  );
}
