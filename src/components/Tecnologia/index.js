import {
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoJavascript,
  IoLogoReact,
  IoLogoSass,
  IoLogoNodejs,
  IoLogoFirebase,
} from "react-icons/io5";

import Title from "../Title";

import { SiTypescript, SiTailwindcss, SiBootstrap } from "react-icons/si";

export default function Tecnologia() {
  return (
    <>
      <Title titulo="Front-end" />
      <div className="cards">
        <div>
          <IoLogoHtml5 /> <span> HTML5 </span>
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
      </div>
      <Title titulo="UI Design" />
      <div className="cards">
        <div>
          <IoLogoCss3 /> <span>CSS </span>
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
      <Title titulo="Back-end" />
      <div className="cards">
        <div>
          <IoLogoNodejs /> <span> Node.js</span>
        </div>
        <div>
          <IoLogoFirebase /> <span> FireBase</span>
        </div>
      </div>
    </>
  );
}
