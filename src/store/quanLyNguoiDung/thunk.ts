// để tạo action xử lý bất đồng bộ call api

// midleware = thunk hoặc saga (nếu là xử lý bất đồng bộ thì phải qua midleware còn dồng bộ thì chui thẳng vào store)

import { createAsyncThunk } from "@reduxjs/toolkit";
import { resolve } from "path";
import { AccountSchemaType } from "schema/AccountSchema";
import { LoginSchemaType } from "schema/LoginSchema";
import { quanLyNguoiDungServices } from "services";

// tạo action async thunk để xử lý api
export const loginThunk = createAsyncThunk(
  "quanLyNguoiDung/loginThunk",
  async (payload: LoginSchemaType, { rejectWithValue }) => {
    try {
      const data = await quanLyNguoiDungServices.login(payload);
      // ở hàm createAsyncThunk return về cái gì thì cái payload ở fullfilled và rejected chính là cái đó
      return data.data.content;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const getUserThunk = createAsyncThunk(
  "quanLyNguoiDung",
  async (_, { rejectWithValue }) => {
    try {
      const accessToken = localStorage.getItem("accessToken");

      // kiểm tra có accessToken hay không
      if (accessToken) {
        const data = await quanLyNguoiDungServices.getUser();
        return data.data.content;
      }

      return undefined;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const updateUserThunk = createAsyncThunk(
  "quanLyNguoiDung/updateUser",
  async (payload: AccountSchemaType, { rejectWithValue, dispatch }) => {
    try {
      await quanLyNguoiDungServices.updateUser(payload);

      await new Promise((resolve) => setTimeout(resolve, 2000));

      dispatch(getUserThunk());
    } catch (err) {
      rejectWithValue(err);
    }
  }
);
