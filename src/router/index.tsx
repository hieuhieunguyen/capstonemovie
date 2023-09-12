import { RouteObject } from "react-router-dom";
import { PATH } from "../constants/config";
import PhongVe from "../pages/PhongVe";

export const router: RouteObject[] = [
  {
    path: PATH.chitietphongve,
    element: <PhongVe />,
  },
];
