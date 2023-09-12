import { createSlice } from "@reduxjs/toolkit";
import { getChairListThunk } from "./thunk";

interface Chair {
  maGhe: number;
  tenGhe: string;
  maRap: number;
  loaiGhe: string;
  stt: string;
  giaVe: number;
  daDat: boolean;
  taiKhoanNguoiDat: null;
}

const initialState = {
  chairBookings: [
    {
      maGhe: 0,
      tenGhe: "string",
      maRap: 0,
      loaiGhe: "string",
      stt: "string",
      giaVe: 0,
      daDat: true,
      taiKhoanNguoiDat: null,
    },
  ],
  chairBookeds: [
    {
      maGhe: 0,
      tenGhe: "string",
      maRap: 0,
      loaiGhe: "string",
      stt: "string",
      giaVe: 0,
      daDat: true,
      taiKhoanNguoiDat: null,
    },
  ],
};

const quanLyDatVeSlice = createSlice({
  name: "quanLyDatVe",
  initialState,
  reducers: {
    chairBookingsAction: (state, actions) => {
      const index = state.chairBookings.findIndex(
        (e: Chair) => e.tenGhe === actions.payload.tenGhe
      );

      if (index != -1) {
        state.chairBookings.splice(index, 1);
      } else {
        state.chairBookings.push(actions.payload);
      }
    },
    chairBookedsAction: (state) => {
      const data = [...state.chairBookings, ...state.chairBookeds];
      return { ...state, chairBookeds: data, chairBookings: [] };
    },
  },
  extraReducers(builder) {
    builder.addCase(getChairListThunk.fulfilled, (state, { payload }) => {});
  },
});

export const { reducer: quanLyDatVeReducer, actions: quanLyDatVeActions } =
  quanLyDatVeSlice;
