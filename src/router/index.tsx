import { RouteObject } from "react-router-dom";
import { PATH } from "../constants/config";
import PhongVe from "../pages/PhongVe";
import { AuthLayout, MainLayout } from "components/layouts";
import { Account, Home, Login, Register } from "pages";

export const router: RouteObject[] = [
  {
    path: PATH.chitietphongve,
    element: <PhongVe />,
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: PATH.account,
        element: <Account />,
      },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: PATH.login,
        element: <Login />,
      },
      {
        path: PATH.register,
        element: <Register />,
      },
    ],
  },
];
