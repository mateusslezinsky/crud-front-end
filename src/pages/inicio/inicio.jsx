import React from "react";

import "./inicio.css";

const HomePage = () => {
  return (
    <div className="container">
      <h1>O que é isso?</h1>
      <p>
        Este é um projeto demonstrativo criado em React com a finalidade de
        realizar diversos tipos de operações com dados provenientes de uma API
        alimentada por um banco de dados.
      </p>
      <h2>Qual as funções disponíveis?</h2>
      <p>
        A partir da navegação superior, é possível realizar as operações CRUD
        (criar, ler, atualizar e excluir) e obter alguns relatórios a partir de
        idades, bem como fazer o cálculo de médias utilizando diferentes
        endpoints da API.
      </p>
    </div>
  );
};

export default HomePage;
