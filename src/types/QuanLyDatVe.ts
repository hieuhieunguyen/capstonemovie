export interface InfoMovie {
  danhSachGhe: Chair[];
  thongTinPhim: Infor;
}

export interface Chair {
  daDat: boolean;
  giaVe: number;
  loaiGhe: string;
  maGhe: number;
  maRap: number;
  stt: string;
  taiKhoanNguoiDat: null;
  tenGhe: string;
}

export interface Infor {
  diaChi: string;
  gioChieu: string;
  hinhAnh: string;
  maLichChieu: number;
  ngayChieu: string;
  tenCumRap: string;
  tenPhim: string;
  tenRap: string;
}

export interface Ticket {
  maLichChieu: string;
  danhSachVe: [
    {
      maGhe: number;
      gaiVe: number;
    }
  ];
}

export interface InfoTickets {
  maLichChieu: string | undefined;
  danhSachVe: Chair[];
}
