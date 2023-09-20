import { createAsyncThunk } from "@reduxjs/toolkit";
import { AccountSchemaType } from "schema/AccountSchema";
import { LoginSchemaType } from "schema/LoginSchema";
import { quanLyNguoiDungServices } from "services";

export const loginThunk = createAsyncThunk(
  "quanLyNguoiDung/loginThunk",
  async (payload: LoginSchemaType, { rejectWithValue }) => {
    try {
      const data = await quanLyNguoiDungServices.login(payload);

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
