import { IoClose } from "react-icons/io5";

import "./modal.css";
export default function Modal({ doc, close }) {
  console.log(doc);
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
          <strong>Frontend:</strong> <i>{doc.frontend} </i>
        </span>

        {doc.backend && (
          <span>
            <strong>Backend:</strong> <i>{doc.backend} </i>
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
