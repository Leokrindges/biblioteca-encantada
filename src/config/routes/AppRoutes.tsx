import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../../pages/Home";
import { QuemSomos } from "../../pages/QuemSomos";
import { Cadastrar } from "../../pages/Cadastrar";
import { Livros } from "../../pages/Livros";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/livros",
    element: <Livros />,
  },
  {
    path: "/quem-somos",
    element: <QuemSomos />,
  },
  {
    path: "/cadastrar",
    element: <Cadastrar />,
  },
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
