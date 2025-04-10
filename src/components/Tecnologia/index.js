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
          <IoLogoHtml5 /> HTML5
        </div>
        <div>
          <IoLogoCss3 /> CSS{" "}
        </div>
        <div>
          <IoLogoJavascript /> JavaScript
        </div>
        <div>
          <IoLogoReact /> React.js
        </div>
        <div>
          <SiTypescript /> TypeScript
        </div>
        <div>
          <IoLogoSass /> SASS
        </div>
        <div>
          <SiBootstrap /> BootStrap
        </div>
        <div>
          <SiTailwindcss /> TailWind
        </div>
      </div>
    </>
  );
}
