import { apiInstance } from "constant";
import { RegisterSchemaType } from "schema";
import { AccountSchemaType } from "schema/AccountSchema";
import { LoginSchemaType } from "schema/LoginSchema";
import { User, UserInfo } from "types";

const api = apiInstance({
  baseURL: import.meta.env.VITE_QUAN_LY_NGUOI_DUNG_API,
});

export const quanLyNguoiDungServices = {
  register: (payload: RegisterSchemaType) => api.post("/DangKy", payload),

  login: (payload: LoginSchemaType) =>
    api.post<ApiResponse<User>>("/DangNhap", payload),

  getUser: () => api.post<ApiResponse<UserInfo>>("/ThongTinTaiKhoan"),

  updateUser: (payload: AccountSchemaType) =>
    api.put("/CapNhatThongTinNguoiDung", payload),
};
