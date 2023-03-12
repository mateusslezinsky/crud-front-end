import React from "react";
import ReactDOM from "react-dom/client";

import { router } from "./routes/routes";
import { RouterProvider } from "react-router-dom";
import { UserProvider } from "./providers/user-provider";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserProvider>
    <RouterProvider router={router} />
  </UserProvider>
);
