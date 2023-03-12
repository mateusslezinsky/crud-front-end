import React from "react";

import FindComponent from "../../components/buscar/buscar-component";
import FormComponent from "../../components/registrar-form/registrar-form";

import { UserContext } from "../../providers/user-provider";

const AlterarPage = () => {
  const { userFormData } = React.useContext(UserContext);

  return (
    <div className="container form-inner-div">
      <h1>Alterar</h1>
      <FindComponent operation="alterar" />
      {userFormData.cpf.length > 0 ? (
        <>
          <h2>Modifique os dados abaixo</h2>
          <FormComponent operation="alterar" />
        </>
      ) : null}
    </div>
  );
};

export default AlterarPage;
