import React from "react";
import { useNavigate } from "react-router-dom";

import "./home.css";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import AuthProvider from "../../contexts/auth";

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <Header />

      <div className="content home">
        <div className="title">
          <h1>Bem-Vindo</h1>
        </div>
      </div>
    </>
  );
}
