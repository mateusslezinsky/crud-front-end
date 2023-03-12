import React from "react";

import { axiosInstance } from "../../config/axios";

const ListarPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setUsers([]);
    try {
      const result = await axiosInstance.get("/users");
      if (result.status === 200) {
        setUsers(result.data);
      }
    } catch (err) {
      setError(err.response);
    }
  };
  const [users, setUsers] = React.useState([]);
  const [error, setError] = React.useState(null);
  return (
    <div className="container form-inner-div">
      <h1>Listar todos os cadastros</h1>
      <form onSubmit={onSubmit}>
        <button type="submit" className="btn btn-primary">
          Obter resultados
        </button>
      </form>
      {users.map((user) => (
        <>
          <ul className="list-group results" key={user.cpf}>
            <li className="list-group-item">Nome: {user.nome}</li>
            <li className="list-group-item">CPF: {user.cpf}</li>
            <li className="list-group-item">Idade: {user.idade}</li>
            <li className="list-group-item">Telefone: {user.telefone}</li>
          </ul>
        </>
      ))}
      {error ? (
        <ul className="list-group results">
          <li className="list-group-item">Erro: {error.data}</li>
        </ul>
      ) : null}
    </div>
  );
};

export default ListarPage;
