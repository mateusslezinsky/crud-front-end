import React from "react";
import Input from "../../components/input/input-component";
import { axiosInstance } from "../../config/axios";

import "./buscar-por-idade.css";

const BuscarPorIdade = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setUsers([]);
    try {
      const result = await axiosInstance.get(`/users?idade=${age}`);
      if (result.status === 200) {
        setAge({
          idade: "",
        });
        setUsers(result.data);
      }
    } catch (err) {
      setError(err.response);
    }
  };
  const [age, setAge] = React.useState(0);
  const [error, setError] = React.useState(null);
  const [users, setUsers] = React.useState([]);
  return (
    <div className="container form-inner-div">
      <h1>Buscar por idade</h1>
      <p className="description">
        Aqui você pode buscar os cadastros por idade.
      </p>
      <form onSubmit={onSubmit}>
        <Input
          id="idade"
          text="Idade"
          type="number"
          min={1}
          max={120}
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Digite a idade"
        />
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
      {users.map((user) => (
        <ul className="list-group results" key={user.cpf}>
          <li className="list-group-item">Nome: {user.nome}</li>
          <li className="list-group-item">CPF: {user.cpf}</li>
          <li className="list-group-item">Idade: {user.idade}</li>
          <li className="list-group-item">Telefone: {user.telefone}</li>
        </ul>
      ))}
      {!error && users.length > 0 ? (
        <ul className="list-group results">
          <li className="list-group-item">Total: {users.length}</li>
        </ul>
      ) : null}
      {error ? (
        <ul className="list-group results">
          <li className="list-group-item">Erro: {error.data}</li>
        </ul>
      ) : null}
    </div>
  );
};

export default BuscarPorIdade;
