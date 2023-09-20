import { createSlice } from "@reduxjs/toolkit";
import { getUserThunk, loginThunk, updateUserThunk } from "./thunk";
import { User, UserInfo } from "types";

type QuanLyNguoiDungInitialState = {
  user?: UserInfo | User;
  accessToken?: string | null;
  isUpdatingUser: boolean;
};
const initialState: QuanLyNguoiDungInitialState = {
  accessToken: localStorage.getItem("accessToken"),
  isUpdatingUser: false,
};

const quanLyNguoiDungSlice = createSlice({
  name: "quanLyNguoiDung",
  initialState,
  reducers: {
    logOut: (state) => {
      state.user = undefined;
      localStorage.removeItem("accessToken");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.user = payload;

        if (payload) {
          localStorage.setItem("accessToken", payload.accessToken);
        }
      })
      .addCase(getUserThunk.fulfilled, (state, { payload }) => {
        if (payload) {
          state.user = payload;
        }
      })
      .addCase(updateUserThunk.pending, (state) => {
        state.isUpdatingUser = true;
      })
      .addCase(updateUserThunk.fulfilled, (state) => {
        state.isUpdatingUser = false;
      })
      .addCase(updateUserThunk.rejected, (state) => {
        state.isUpdatingUser = false;
      });
  },
});

export const {
  reducer: quanLyNguoiDungReducer,
  actions: quanLyNguoiDungActions,
} = quanLyNguoiDungSlice;
