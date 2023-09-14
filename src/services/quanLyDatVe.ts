import { apiInstance } from "../constants/apiInstance";
import { InfoMovie } from "../types/QuanLyDatVe";

const api = apiInstance({
  baseURL: import.meta.env.VITE_QUAN_LY_DAT_VE_API,
});

export const quanLyDatVeServices = {
  getChairList: () =>
    api.get<ApiResponse<InfoMovie>>("/LayDanhSachPhongVe?MaLichChieu=16909"),
};
