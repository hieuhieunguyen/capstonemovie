import { apiInstance } from "../constants/apiInstance";
import { InfoMovie, InfoTickets } from "../types/QuanLyDatVe";

const api = apiInstance({
  baseURL: import.meta.env.VITE_QUAN_LY_DAT_VE_API,
});

export const quanLyDatVeServices = {
  getChairList: (maLichChieu: string) =>
    api.get<ApiResponse<InfoMovie>>(
      `/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`
    ),
  buyTicket: (payload: InfoTickets) => {
    api.post("/DatVe", payload);
  },
};
