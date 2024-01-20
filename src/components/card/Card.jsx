import { Projects } from "../../utils/projects.js";

import "../../sass/card.scss";
import "../../../public/gifs/mon.gif";

export const Card = () => {
  return (
    <>
      {Projects.map((card) => (
        <div className="card-container" key={card.id}>
          <figure className="image-card">
            <img src={`../../../${card.path}`} alt="" />
          </figure>
          <span>
            <ul>
              <li>
                <strong >Nome:</strong> {card.nome}
              </li>
              <li>
                <strong >Descrição:</strong> {card.descricao}
              </li>
              <li className="item">
                <strong >Tecnologias:</strong>
                <ul className="items-bib">
                {card.tecnologias.map((item, index) =>(
                     <li key={index} className="item-bib">
                     {item}
                   </li>

                ))}

                </ul> 
              </li>
              <li>
                <strong >Repositório:</strong> {card.repositorio}
              </li>{" "}
              {/* Corrigido o nome da propriedade */}
              <li className="item">
                <strong >Bibliotecas:</strong>
                <ul className="items-bib">
                  {card.bibliotecas.map((item, index) => (
                    <li key={index} className="item-bib">
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </span>
        </div>
      ))}
    </>
  );
};
