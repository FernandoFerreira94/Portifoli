import { IoClose } from "react-icons/io5";

import "./modal.css";
export default function Modal({ q, close }) {
  return (
    <>
      <div className="modal">
        <div className="close" onClick={close}>
          <IoClose size={35} color="red" />
        </div>
        <span>
          <strong>Nome:</strong> <i>{q.nome} </i>
        </span>
        <span>
          <strong>Front-end:</strong> <i>{q.frontEnd} </i>
        </span>

        {q.backEnd && (
          <span>
            <strong>Back-End:</strong> <i>{q.backEnd} </i>
          </span>
        )}

        <span>
          <strong>Descrição:</strong> <i>{q.descricao} </i>
        </span>
        <span>
          <strong>Funcionalidade:</strong>
          {q.funcionalidade.map((iten, index) => (
            <ul key={index}>
              <li>
                * <i>{iten}</i>{" "}
              </li>
            </ul>
          ))}
        </span>
        <span>
          <strong>Site:</strong>{" "}
          <a href={q.site} target="blank">
            {q.nome}
          </a>
        </span>
      </div>
    </>
  );
}
