import React from "react";
import ReactDOM from "react-dom/client";

import { router } from "./routes/routes";
import { RouterProvider } from "react-router-dom";
import { UserProvider } from "./providers/user-provider";

import MenuBar from "./components/menu-bar/menu-bar";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserProvider>
    <MenuBar />
    <RouterProvider router={router} />
  </UserProvider>
);
