// Importa React e dependências para roteamento
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import EventPage from "./pages/EventCountdown";
import { useRouteError } from 'react-router-dom';
// Simple error page for route errors
function ErrorPage() {
  const error: any = useRouteError();
  return (
    <div className="container">
      <h1>Algo deu errado</h1>
      <pre style={{ whiteSpace: 'pre-wrap', color: '#b91c1c' }}>{String(error?.statusText || error?.message || error)}</pre>
      <p>Tente recarregar a página ou volte para a página inicial.</p>
    </div>
  );
}
import "./index.css";

// Define as rotas da aplicação
const router = createBrowserRouter([
  { path: "/", element: <App />, errorElement: <ErrorPage /> },
  { path: "/event", element: <EventPage />, errorElement: <ErrorPage /> },
]);

// Renderiza a aplicação React no elemento root
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
