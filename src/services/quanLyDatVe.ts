import { apiInstance } from "../constants/apiInstance";
import { Chair } from "../types/QuanLyDatVe";

const api = apiInstance({
  baseURL: import.meta.env.VITE_QUAN_LY_DAT_VE_API,
});

export const quanLyDatVeServices = {
  getChairList: () =>
    api.get<ApiResponse<Chair[]>>("/LayDanhSachPhongVe?MaLichChieu=16909"),
};
