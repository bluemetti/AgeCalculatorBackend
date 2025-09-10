// Importa React e dependências para roteamento
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";

// Define as rotas da aplicação
const router = createBrowserRouter([
  {
    path: "/", // Rota principal
    element: <App />, // Componente principal
  },
]);

// Renderiza a aplicação React no elemento root
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
