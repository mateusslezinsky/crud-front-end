import FormPage from "../pages/registrar/registrar";
import AlterarPage from "../pages/alterar/alterar";
import HomePage from "../pages/inicio/inicio";
import FindOnePage from "../pages/buscar/buscar";
import DeletePage from "../pages/deletar/deletar";
import ListarPage from "../pages/listar/listar";
import BuscarPorIdade from "../pages/buscar-por-idade/buscar-por-idade";
import IdadesExtremas from "../pages/idades-extremas/idades-extremas";

import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/registrar",
    element: <FormPage />,
  },
  {
    path: "/alterar",
    element: <AlterarPage />,
  },
  {
    path: "/consultar",
    element: <FindOnePage />,
  },
  {
    path: "/excluir",
    element: <DeletePage />,
  },
  {
    path: "/busca-por-idade",
    element: <BuscarPorIdade />,
  },
  {
    path: "/idades-extremas",
    element: <IdadesExtremas />,
  },
  {
    path: "/listar",
    element: <ListarPage />,
  },
]);
