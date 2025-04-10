import { IoClose } from "react-icons/io5";

import "./modal.css";
export default function Modal({ doc, close }) {
  return (
    <>
      <div className="modal">
        <div className="close" onClick={close}>
          <IoClose size={50} color="red" />
        </div>
        <span>
          <strong>Nome:</strong> <i>{doc.name} </i>
        </span>
        <span>
          <strong>Front-end:</strong> <i>{doc.front} </i>
        </span>

        {doc.back && (
          <span>
            <strong>Back-End:</strong> <i>{doc.back} </i>
          </span>
        )}

        <span>
          <strong>Descrição:</strong> <i>{doc.description} </i>
        </span>
        <span>
          <strong>Funcionalidade:</strong>
          {doc.functionality.map((iten, index) => (
            <ul key={index}>
              <li>
                <i>{iten}</i>
              </li>
            </ul>
          ))}
        </span>
        <span>
          <strong>Site:</strong>{" "}
          <a href={doc.url} target="blank">
            {doc.name}
          </a>
        </span>
      </div>
    </>
  );
}
