import React from "react";
import { useNavigate } from "react-router-dom";

import { axiosInstance } from "../../config/axios";
import { UserContext } from "../../providers/user-provider";

import "./registrar-form.css";

import Input from "../input/input-component";

const FormComponent = ({ operation = "registrar" }) => {
  const navigate = useNavigate();
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      if (operation === "registrar") {
        const result = await axiosInstance.post("/users", userFormData);
        if (result.status === 200) {
          setUserFormData({
            cpf: "",
            nome: "",
            idade: "",
            telefone: "",
          });
          return navigate("/");
        }
      } else if (operation === "alterar") {
        const result = await axiosInstance.put(`/users/${userFormData.cpf}`, {
          cpf: userFormData.cpf,
          nome: userFormData.nome,
          idade: userFormData.idade,
          telefone: userFormData.telefone,
        });
        if (result.status === 200) {
          setUserFormData({
            cpf: "",
            nome: "",
            idade: "",
            telefone: "",
          });
          return navigate("/");
        }
      }
    } catch (err) {
      console.error(err);
    }
  };

  const { userFormData, setUserFormData } = React.useContext(UserContext);

  return (
    <div className="form-inner-div">
      <form onSubmit={onSubmit}>
        <Input
          id="cpf"
          text="CPF"
          type="text"
          value={userFormData.cpf}
          onChange={(e) =>
            setUserFormData({ ...userFormData, cpf: e.target.value })
          }
          mask={"999.999.999-99"}
          placeholder="Digite seu CPF"
          disabled={operation === "alterar" ? true : false}
        />
        <Input
          id="nome"
          text="Nome"
          type="text"
          placeholder="Digite seu nome (apenas letras)"
          value={userFormData.nome}
          onChange={(e) =>
            setUserFormData({ ...userFormData, nome: e.target.value })
          }
        />
        <Input
          id="idade"
          text="Idade"
          type="number"
          min={1}
          max={120}
          value={userFormData.idade}
          onChange={(e) =>
            setUserFormData({ ...userFormData, idade: e.target.value })
          }
          placeholder="Digite a sua idade"
        />
        <Input
          id="telefone"
          text="Telefone"
          type="text"
          value={userFormData.telefone}
          onChange={(e) =>
            setUserFormData({ ...userFormData, telefone: e.target.value })
          }
          mask={"(99) 99999-9999"}
          placeholder="Digite seu telefone"
        />

        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default FormComponent;
