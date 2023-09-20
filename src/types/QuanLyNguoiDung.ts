export type User = {
  taiKhoan: string;
  hoTen: string;
  email: string;
  soDT: string;
  maNhom: string;
  maLoaiNguoiDung: string;
  accessToken: string;
};

export type UserInfo = User & {
  loaiNguoiDung: {
    maLoaiNguoiDung: string;
    tenLoai: string;
  };
  thongTinDatVe: InfoTickets[];
};

export interface TicketsBuyed {
  giaVe: number;
  hinhAnh: string;
  maVe: number;
  ngayDat: string;
  tenPhim: string;
  thoiLuongPhim: number;
}

export interface InfoTickets {
  danhSachGhe: InfoChair[];
  giaVe: number;
  hinhAnh: string;
  maVe: number;
  ngayDat: string;
  tenPhim: string;
  thoiLuongPhim: number;
}

export interface InfoChair {
  maCumRap: string;
  maGhe: number;
  maHeThongRap: string;
  maRap: number;
  tenCumRap: string;
  tenGhe: string;
  tenHeThongRap: string;
  tenRap: string;
}
