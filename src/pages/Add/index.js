import React, { useState } from "react";
import { collection, doc, setDoc } from "firebase/firestore";
import { Db } from "../../DataBase";

export default function SubmitForm() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    img: "",
    frontend: "",
    backend: "",
    url: "",
    functionality: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFunctionalityChange = (e) => {
    const functionalityArray = e.target.value.split(","); // Dividir funcionalidades por vírgulas
    setFormData({ ...formData, functionality: functionalityArray });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!formData.name.trim()) {
        alert("O campo 'name' é obrigatório para definir o ID!");
        return;
      }

      // Define o documento com o 'name' como ID
      await setDoc(
        doc(collection(Db, "project secundary"), formData.name),
        formData
      );
      alert(`Projeto registrado com sucesso! ID: ${formData.name}`);
    } catch (error) {
      console.error("Erro ao registrar projeto:", error);
      alert("Ocorreu um erro ao registrar o projeto.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nome (ID):</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="description">Descrição:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="img">URL da Imagem:</label>
        <input
          type="text"
          id="img"
          name="img"
          value={formData.img}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="frontEnd">Front-end:</label>
        <input
          type="text"
          id="frontEnd"
          name="frontEnd"
          value={formData.frontend}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="backEnd">Back-end:</label>
        <input
          type="text"
          id="backEnd"
          name="backEnd"
          value={formData.backend}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="url">URL do Projeto:</label>
        <input
          type="text"
          id="url"
          name="url"
          value={formData.url}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="functionality">
          Funcionalidades (separadas por vírgulas):
        </label>
        <textarea
          id="functionality"
          name="functionality"
          value={formData.functionality.join(",")}
          onChange={handleFunctionalityChange}
          rows="4"
          cols="50"
          placeholder="Insira as funcionalidades separadas por vírgulas"
        />
      </div>

      <button type="submit">Enviar Projeto</button>
    </form>
  );
}
