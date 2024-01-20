import "../sass/home.scss";
//import { age } from '../utils/age'

import { WhoIAm } from "../components/items/Items";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsappSquare,
  FaReact,
  FaNode,
  FaFigma,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaSass,
} from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { MdEmail } from "react-icons/md";

export const Home = () => {
  return (
    <main className="home">
      <div className="profile">
        <div className="profile-container">
          <div className="profile-im">
            <div className="information">
              <h1>Alan Dorneles</h1>
              <p>Desenvolvedor front-end</p>
              <span className="container-icon">
                <a
                  href="https://www.github.com/AlanDorneles"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="icon" />
                </a>
                <a
                  href="https://www.linkedin.com/in/alan-dorneles"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="icon" />
                </a>
                <a
                  href="https://wa.me/5553999598299"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsappSquare className="icon" />
                </a>
              </span>

              <span className="email">
                <MdEmail />
                <p>alanricardo.97@gmail.com</p>
              </span>
            </div>
          </div>
          <div className="habilities-and-metodologies">
            <span className="list-items">
              <h1>Tecnologias</h1>
              <ul className="items">
                <li>
                  <FaReact className="icon" />
                  React
                </li>
                <li>
                  <FaNode className="icon" />
                  Node.js
                </li>
                <li>
                  <FaPython className="icon" />
                  Python
                </li>
                <li>
                  <FaHtml5 className="icon" />
                  HTML
                </li>
                <li>
                  <FaCss3Alt className="icon" />
                  CSS
                </li>
                <li>
                  <FaSass className="icon" />
                  SASS
                </li>
                <li>
                  <FaFigma className="icon" />
                  Figma
                </li>
                <li>
                  <DiMongodb className="icon" />
                  MongoDB
                </li>
              </ul>
            </span>
            <span className="list-items">
              <h1>Metodologias</h1>
              <ul className="items">
                <li>Design System</li>
                <li>Atomic Desing</li>
                <li>Design Thinking</li>
                <li>Scrum</li>
              </ul>
            </span>
          </div>
        </div>
        <hr />
        <div className="who-im">
          <span>
            <h1>Quem sou eu?</h1>
            <p>
              Olá! Sou Alan, um desenvolvedor front-end apaixonado por criar
              soluções usando tecnologia. Ao longo da minha jornada, busco criar
              experiências únicas e impactantes.
            </p>
          </span>
          <h1>Trajetória</h1>

          <div className="handlers">
            <WhoIAm />
          </div>
        </div>
      </div>
    </main>
  );
};
