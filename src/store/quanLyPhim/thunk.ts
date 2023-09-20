import { createAsyncThunk } from "@reduxjs/toolkit";
import { quanLyPhimServices } from "services";

export const getMovieListThunk = createAsyncThunk(
  "quanLyPhim/getMovieListThunk",
  // tham só đầu tiên của hàm async luôn luôn là payload, nếu ko sử dụng payload thì sử dụng _
  async (_, { rejectWithValue }) => {
    try {
      const data = await quanLyPhimServices.getMovieList();
      // sleep
      await new Promise((resolve) => setTimeout(resolve, 1000));

      return data.data.content;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
