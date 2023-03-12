import React from "react";
import { axiosInstance } from "../../config/axios";
import { UserContext } from "../../providers/user-provider";

import Input from "../input/input-component";

const FindComponent = ({ operation = "consultar" }) => {
  const onSubmit = async (e) => {
    e.preventDefault();
    setUserFormData({ cpf: "", nome: "", idade: "", telefone: "" });
    setError(null);
    try {
      if (operation === "consultar" || operation === "alterar") {
        const result = await axiosInstance.get(
          `/users/${formData.cpf}`,
          formData
        );
        setUserFormData(result.data);
      } else if (operation === "excluir") {
        const result = await axiosInstance.delete(`/users/${formData.cpf}`);
        setUserFormData(result.data);
      }
    } catch (err) {
      setError(err.response);
    }
  };
  const [formData, setFormData] = React.useState({ cpf: "" });
  const { userFormData, setUserFormData } = React.useContext(UserContext);

  const [error, setError] = React.useState(null);
  return (
    <div className="form-inner-div">
      <form onSubmit={onSubmit}>
        <Input
          id="cpf"
          text="CPF"
          type="text"
          value={formData.cpf}
          onChange={(e) => setFormData({ ...formData, cpf: e.target.value })}
          mask={"999.999.999-99"}
          placeholder="Consulte o CPF"
        />
        <button type="submit" className="btn btn-primary">
          Consultar
        </button>
      </form>
      {userFormData.cpf.length > 0 ? (
        <>
          {operation === "excluir" ? (
            <div className="results">Excluído com sucesso: </div>
          ) : null}
          {operation === "consultar" || operation === "excluir" ? (
            <>
              <ul className="list-group results">
                <li className="list-group-item">Nome: {userFormData.nome}</li>
                <li className="list-group-item">CPF: {userFormData.cpf}</li>
                <li className="list-group-item">Idade: {userFormData.idade}</li>
                <li className="list-group-item">
                  Telefone: {userFormData.telefone}
                </li>
              </ul>
            </>
          ) : null}
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

export default FindComponent;
