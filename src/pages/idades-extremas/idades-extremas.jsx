import React from "react";
import { axiosInstance } from "../../config/axios";

import "./idades-extremas.css";

const IdadesExtremas = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setUsers([]);
    try {
      const result = await axiosInstance.get("/users/idades-extremas");
      if (result.status === 200) {
        setUsers(result.data);
      }
      const media = await axiosInstance.get("/users/media-idades");
      if (media.status === 200) {
        setMedia(media.data.media.toFixed(2));
      }
    } catch (err) {
      setError(err.response);
    }
  };

  const [error, setError] = React.useState(null);
  const [users, setUsers] = React.useState([]);
  const [media, setMedia] = React.useState(0);
  return (
    <div className="container form-inner-div">
      <h1>Relatório das idades</h1>
      <form onSubmit={onSubmit}>
        <button type="submit" className="btn btn-primary">
          Obter resultados
        </button>
      </form>
      {users.map((user, index) => (
        <>
          {index === 0 ? <h2>Mais novo</h2> : <h2>Mais velho</h2>}
          <ul className="list-group results" key={user.cpf}>
            <li className="list-group-item">Nome: {user.nome}</li>
            <li className="list-group-item">CPF: {user.cpf}</li>
            <li className="list-group-item">Idade: {user.idade}</li>
            <li className="list-group-item">Telefone: {user.telefone}</li>
          </ul>
        </>
      ))}

      {media > 0 ? (
        <>
          <h2>Média geral das idades cadastradas</h2>
          <ul className="list-group results">
            <li className="list-group-item">
              Média de todas as idades: {media}
            </li>
          </ul>
        </>
      ) : null}
      {error ? (
        <ul className="list-group results">
          <li className="list-group-item">Erro: {error.data}</li>
        </ul>
      ) : null}
    </div>
  );
};

export default IdadesExtremas;
