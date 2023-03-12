import React from "react";

import "./inicio.css";

const HomePage = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active ">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/registrar">
                Cadastrar
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/alterar">
                Alterar
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/consultar">
                Consultar
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/excluir">
                Excluir
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/listar">
                Listar
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/busca-por-idade">
                Busca por idade
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/idades-extremas">
                Idades e médias
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default HomePage;
