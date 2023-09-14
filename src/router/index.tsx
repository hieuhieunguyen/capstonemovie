import { RouteObject } from "react-router-dom";
import { PATH } from "../constants/config";
import PhongVe from "../pages/PhongVe";
import Demo from "../demo/Demo";

export const router: RouteObject[] = [
  {
    path: PATH.chitietphongve,
    element: <PhongVe />,
  },
  {
    path: PATH.demo,
    element: <Demo />,
  },
];
