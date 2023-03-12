import React from "react";
import FindComponent from "../../components/buscar/buscar-component";

const DeletePage = () => {
  return (
    <div className="container form-inner-div">
      <h1>Excluir</h1>
      <FindComponent operation="excluir" />
    </div>
  );
};

export default DeletePage;
