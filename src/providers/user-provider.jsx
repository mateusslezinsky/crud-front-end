import React, { createContext, useState } from "react";

export const UserContext = createContext({
  userFormData: {},
  setUserFormData: () => {},
});

export const UserProvider = ({ children }) => {
  const [userFormData, setUserFormData] = useState({
    cpf: "",
    nome: "",
    idade: "",
    telefone: "",
  });
  return (
    <UserContext.Provider value={{ userFormData, setUserFormData }}>
      {children}
    </UserContext.Provider>
  );
};
