import { createSlice } from "@reduxjs/toolkit";
import { Chair, InfoMovie } from "../../types/QuanLyDatVe";
import { buyTicketsThunk, getChairListThunk } from "./thunk";

type QuanLyDatVeInitialState = {
  chairBookings: Chair[];
  chairBookeds: Chair[];
  isisFetchingChairList: boolean;
  inforMovie: InfoMovie;
  maLichChieuPhim: string;
  isBuyingTickets: boolean;
};

const initialState: QuanLyDatVeInitialState = {
  chairBookings: [],
  chairBookeds: [],
  isisFetchingChairList: false,
  inforMovie: {
    danhSachGhe: [],
    thongTinPhim: {
      diaChi: "",
      gioChieu: "",
      hinhAnh: "",
      maLichChieu: 0,
      ngayChieu: "",
      tenCumRap: "",
      tenPhim: "",
      tenRap: "",
    },
  },
  maLichChieuPhim: "",
  isBuyingTickets: false,
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
  extraReducers: (builder) => {
    builder
      .addCase(getChairListThunk.pending, (state) => {
        state.isisFetchingChairList = true;
      })
      .addCase(getChairListThunk.fulfilled, (state, { payload }) => {
        state.inforMovie = payload;
        state.isisFetchingChairList = false;
        console.log(state.inforMovie);
      })
      .addCase(getChairListThunk.rejected, (state) => {
        state.isisFetchingChairList = false;
      })
      .addCase(buyTicketsThunk.pending, (state) => {
        state.isBuyingTickets = true;
      })
      .addCase(buyTicketsThunk.fulfilled, (state) => {
        state.isBuyingTickets = false;
      })
      .addCase(buyTicketsThunk.rejected, (state) => {
        state.isBuyingTickets = false;
      });
  },
});

export const { reducer: quanLyDatVeReducer, actions: quanLyDatVeActions } =
  quanLyDatVeSlice;
