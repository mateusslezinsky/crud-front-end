import React from "react";

import LogoComponent from "../logo/logo-component";

import "./menu-bar.css";

const MenuBar = () => {
  return (
    <>
      <LogoComponent />
      <nav className="navbar navbar-expand-lg navbar-light main-navigation">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active ">
              <a className="nav-link" href="/">
                Início
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
    </>
  );
};

export default MenuBar;
